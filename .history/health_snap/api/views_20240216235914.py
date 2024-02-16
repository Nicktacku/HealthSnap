from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, RecordSerializer, FeedbackSerializer

from .models import Record, Feedback


from django.contrib.auth.models import User

from .nfa import NFA

@api_view()
def home(request):
    return Response("Hello world")

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        user = User.objects.create_user(
            serializer.data["username"],
            serializer.data["email"],
            serializer.data["password"],
            )
        user.first_name = serializer.data["first_name"]
        user.last_name = serializer.data["last_name"]
        user.save()
        
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getRecords(request):
    records = Record.objects.all()
    serializer = RecordSerializer(records, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def giveRecord(request):
    print(request.data)

    serializer = RecordSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print("saved")
        return Response(serializer.data)
    print("didnot save", serializer.data)
    return Response(serializer.data)

@api_view(["GET"])
def getFeedbacks(request):
    feedbacks = Feedback.objects.all()
    serializer = FeedbackSerializer(feedbacks, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def giveFeedback(request):

    serializer = FeedbackSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        print("saved")
        return Response(serializer.data)
    print("didnot save", serializer.data)
    return Response(serializer.data)

@api_view(["POST"])
def symptom_checker(request):
    states = ["no sickness", "common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"]
    inputs = ["u1", "u2", "u3",
            "u4", "u5", "u6",
            "u7", "u8", "u9",
            "u10", "cc4", "i2",
            "ab1", "ab3", "ab10",
            "to1", "to2", "to7",
            "to9", "to10", "ch3",
            "ch5", "ch7", "ch8"]


    transition = {("no sickness", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("no sickness", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("no sickness", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("no sickness", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("no sickness", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("no sickness", "u6"): {"common cold", "influenza"},
                ("no sickness", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("no sickness", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("no sickness", "u9"): {"influenza", "tonsillopharyngitis"},
                ("no sickness", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("no sickness", "cc4"): {"common cold"},
                ("no sickness", "i2"): {"influenza"},
                ("no sickness", "ab1"): {"Acute Bronchitis"},
                ("no sickness", "ab3"): {"Acute Bronchitis"},
                ("no sickness", "ab10"): {"Acute Bronchitis"},
                ("no sickness", "to1"): {"tonsillopharyngitis"},
                ("no sickness", "to2"): {"tonsillopharyngitis"},
                ("no sickness", "to7"): {"tonsillopharyngitis"},
                ("no sickness", "to9"): {"tonsillopharyngitis"},
                ("no sickness", "to10"): {"tonsillopharyngitis"},
                ("no sickness", "ch3"): {"chickenpox"},
                ("no sickness", "ch5"): {"chickenpox"},
                ("no sickness", "ch7"): {"chickenpox"},
                ("no sickness", "ch8"): {"chickenpox"},
                ("common cold", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("common cold", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("common cold", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("common cold", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("common cold", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("common cold", "u6"): {"common cold", "influenza"},
                ("common cold", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("common cold", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("common cold", "u9"): {"influenza", "tonsillopharyngitis"},
                ("common cold", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("common cold", "cc4"): {"common cold"},
                ("common cold", "i2"): {"influenza"},
                ("common cold", "ab1"): {"Acute Bronchitis"},
                ("common cold", "ab3"): {"Acute Bronchitis"},
                ("common cold", "ab10"): {"Acute Bronchitis"},
                ("common cold", "to1"): {"tonsillopharyngitis"},
                ("common cold", "to2"): {"tonsillopharyngitis"},
                ("common cold", "to7"): {"tonsillopharyngitis"},
                ("common cold", "to9"): {"tonsillopharyngitis"},
                ("common cold", "to10"): {"tonsillopharyngitis"},
                ("common cold", "ch3"): {"chickenpox"},
                ("common cold", "ch5"): {"chickenpox"},
                ("common cold", "ch7"): {"chickenpox"},
                ("common cold", "ch8"): {"chickenpox"},
                ("influenza", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("influenza", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("influenza", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("influenza", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("influenza", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("influenza", "u6"): {"common cold", "influenza"},
                ("influenza", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("influenza", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("influenza", "u9"): {"influenza", "tonsillopharyngitis"},
                ("influenza", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("influenza", "cc4"): {"common cold"},
                ("influenza", "i2"): {"influenza"},
                ("influenza", "ab1"): {"Acute Bronchitis"},
                ("influenza", "ab3"): {"Acute Bronchitis"},
                ("influenza", "ab10"): {"Acute Bronchitis"},
                ("influenza", "to1"): {"tonsillopharyngitis"},
                ("influenza", "to2"): {"tonsillopharyngitis"},
                ("influenza", "to7"): {"tonsillopharyngitis"},
                ("influenza", "to9"): {"tonsillopharyngitis"},
                ("influenza", "to10"): {"tonsillopharyngitis"},
                ("influenza", "ch3"): {"chickenpox"},
                ("influenza", "ch5"): {"chickenpox"},
                ("influenza", "ch7"): {"chickenpox"},
                ("influenza", "ch8"): {"chickenpox"},
                ("Acute Bronchitis", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("Acute Bronchitis", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("Acute Bronchitis", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("Acute Bronchitis", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("Acute Bronchitis", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("Acute Bronchitis", "u6"): {"common cold", "influenza"},
                ("Acute Bronchitis", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("Acute Bronchitis", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("Acute Bronchitis", "u9"): {"influenza", "tonsillopharyngitis"},
                ("Acute Bronchitis", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("Acute Bronchitis", "cc4"): {"common cold"},
                ("Acute Bronchitis", "i2"): {"influenza"},
                ("Acute Bronchitis", "ab1"): {"Acute Bronchitis"},
                ("Acute Bronchitis", "ab3"): {"Acute Bronchitis"},
                ("Acute Bronchitis", "ab10"): {"Acute Bronchitis"},
                ("Acute Bronchitis", "to1"): {"tonsillopharyngitis"},
                ("Acute Bronchitis", "to2"): {"tonsillopharyngitis"},
                ("Acute Bronchitis", "to7"): {"tonsillopharyngitis"},
                ("Acute Bronchitis", "to9"): {"tonsillopharyngitis"},
                ("Acute Bronchitis", "to10"): {"tonsillopharyngitis"},
                ("Acute Bronchitis", "ch3"): {"chickenpox"},
                ("Acute Bronchitis", "ch5"): {"chickenpox"},
                ("Acute Bronchitis", "ch7"): {"chickenpox"},
                ("Acute Bronchitis", "ch8"): {"chickenpox"},
                ("tonsillopharyngitis", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("tonsillopharyngitis", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("tonsillopharyngitis", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("tonsillopharyngitis", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("tonsillopharyngitis", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("tonsillopharyngitis", "u6"): {"common cold", "influenza"},
                ("tonsillopharyngitis", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("tonsillopharyngitis", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("tonsillopharyngitis", "u9"): {"influenza", "tonsillopharyngitis"},
                ("tonsillopharyngitis", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("tonsillopharyngitis", "cc4"): {"common cold"},
                ("tonsillopharyngitis", "i2"): {"influenza"},
                ("tonsillopharyngitis", "ab1"): {"Acute Bronchitis"},
                ("tonsillopharyngitis", "ab3"): {"Acute Bronchitis"},
                ("tonsillopharyngitis", "ab10"): {"Acute Bronchitis"},
                ("tonsillopharyngitis", "to1"): {"tonsillopharyngitis"},
                ("tonsillopharyngitis", "to2"): {"tonsillopharyngitis"},
                ("tonsillopharyngitis", "to7"): {"tonsillopharyngitis"},
                ("tonsillopharyngitis", "to9"): {"tonsillopharyngitis"},
                ("tonsillopharyngitis", "to10"): {"tonsillopharyngitis"},
                ("tonsillopharyngitis", "ch3"): {"chickenpox"},
                ("tonsillopharyngitis", "ch5"): {"chickenpox"},
                ("tonsillopharyngitis", "ch7"): {"chickenpox"},
                ("tonsillopharyngitis", "ch8"): {"chickenpox"},
                ("chickenpox", "u1"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("chickenpox", "u2"): {"common cold", "influenza", "Acute Bronchitis"},
                ("chickenpox", "u3"): {"common cold", "influenza", "Acute Bronchitis"},
                ("chickenpox", "u4"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("chickenpox", "u5"): {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"},
                ("chickenpox", "u6"): {"common cold", "influenza"},
                ("chickenpox", "u7"): {"common cold", "influenza", "Acute Bronchitis"},
                ("chickenpox", "u8"): {"influenza", "tonsillopharyngitis", "chickenpox"},
                ("chickenpox", "u9"): {"influenza", "tonsillopharyngitis"},
                ("chickenpox", "u10"): {"influenza", "tonsillopharyngitis", "Acute Bronchitis"},
                ("chickenpox", "cc4"): {"common cold"},
                ("chickenpox", "i2"): {"influenza"},
                ("chickenpox", "ab1"): {"Acute Bronchitis"},
                ("chickenpox", "ab3"): {"Acute Bronchitis"},
                ("chickenpox", "ab10"): {"Acute Bronchitis"},
                ("chickenpox", "to1"): {"tonsillopharyngitis"},
                ("chickenpox", "to2"): {"tonsillopharyngitis"},
                ("chickenpox", "to7"): {"tonsillopharyngitis"},
                ("chickenpox", "to9"): {"tonsillopharyngitis"},
                ("chickenpox", "to10"): {"tonsillopharyngitis"},
                ("chickenpox", "ch3"): {"chickenpox"},
                ("chickenpox", "ch5"): {"chickenpox"},
                ("chickenpox", "ch7"): {"chickenpox"},
                ("chickenpox", "ch8"): {"chickenpox"},
                }
    initial = {"no sickness"}
    final = {"common cold", "influenza", "Acute Bronchitis", "tonsillopharyngitis", "chickenpox"}

    nfa = NFA(states, inputs, transition, initial, final)
    result = nfa.run(list(set(request.data["symptoms"])))

    return Response(result)



