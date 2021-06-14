import json
import os


def read():
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, "..\Game_Data\sylas.json")
    file = open(filename)
    read_file = file.read()
    champion = json.loads(read_file)
    return champion


champiton = read()


class Champion():
    def __init__(self, name, hp, ad, ap, armor):
        self.name = name
        self.hp = hp
        self.ad = ad
        self.ap = ap
        self.armor = armor

    def print_champion(self):
        print("name", self.name)
        print("hp", self.hp)
        print("ad", self.ad)
        print("ap", self.ap)
        print("armor", self.armor)


class Sylas(Champion):
    def __init__(self):
        super().__init__(name=champiton['name'], hp=champiton['hp'],
                         ad=champiton['ad'], ap=champiton['ap'], armor=champiton['armor'])


sylas = Sylas()
sylas.print_champion()
