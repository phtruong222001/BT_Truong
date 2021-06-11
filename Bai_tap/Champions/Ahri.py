from Bai_tap.Champions.Champion import Champion
from Bai_tap.Skills.Ahri.Charm import Charm
from Bai_tap.Skills.Ahri.FoxFire import FoxFire
from Bai_tap.Skills.Ahri.OrbOfDeception import OrbOfDeception
from Bai_tap.Skills.Ahri.SpritRush import SpiritRush


class Ahri(Champion):
    def __init__(self):
        orb_of_deception = OrbOfDeception()
        fox_fire = FoxFire()
        charm = Charm()
        spirit_rush = SpiritRush()

        super().__init__(name="Ahri", hp=700, attack_damage=50, ability_power=100, armor=50, magic_armor=25,
                         speed=345, true_damage=20, max_hp=700, button_q=orb_of_deception, button_w=fox_fire,
                         button_e=charm,
                         button_r=spirit_rush)
