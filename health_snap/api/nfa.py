class NFA:
    def __init__(self, states, inputs, transitions, start, final):
        self.states = states
        self.inputs = inputs
        self.transitions = transitions
        self.start = start
        self.final = final
        self.included = dict()

    def run(self, symptoms):
        sicknesses = self.start
        while symptoms != []:
            new_sicknesses = set({})
            for q in sicknesses:
                new_sicknesses = new_sicknesses.union(self.transitions[(q,symptoms[0])])
            symptoms = symptoms[1:]
            sicknesses = new_sicknesses
            print("symptoms", symptoms)
            print("sicknesses", sicknesses)

            for sickness in sicknesses:
                if sickness in self.included:
                    self.included[sickness] += 1
                else:
                    self.included[sickness] = 1
        for key, value in self.included.items():
            total = 0
            if key == "common cold":
                total = 8
            elif key == "influenza":
                total = 11
            elif key == "Acute Bronchitis":
                total = 10
            elif key == "tonsillopharyngitis":
                total = 10
            elif key == "chickenpox":
                total = 8
            self.included[key] = int((value/total) * 100)
        return self.included

        


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
              ("no sickness", "u10"): {"influenza", "tonsillopharyngitis"},
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
              ("common cold", "u10"): {"influenza", "tonsillopharyngitis"},
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
              ("influenza", "u10"): {"influenza", "tonsillopharyngitis"},
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
              ("Acute Bronchitis", "u10"): {"influenza", "tonsillopharyngitis"},
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
              ("tonsillopharyngitis", "u10"): {"influenza", "tonsillopharyngitis"},
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
              ("chickenpox", "u10"): {"influenza", "tonsillopharyngitis"},
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


if __name__ == "__main__":
    print(nfa.run(["cc4", "u5"]))