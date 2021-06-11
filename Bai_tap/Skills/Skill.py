class Skill:
    def __init__(self, name=""):
        self.name = name

    def activate(self, champion, opponent):
        print("CHAMPION %s ACTIVATE %s ON OPPONENT %s" % (champion.name, self.name, opponent.name))
