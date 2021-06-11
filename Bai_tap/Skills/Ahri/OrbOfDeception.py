from Bai_tap.Skills.Skill import Skill


class OrbOfDeception(Skill):
    hit_count = 0

    is_trigger_effect = False

    def __init__(self):
        super().__init__(name="Orb of Deception")

    def activate(self, champion, opponent):
        super().activate(champion, opponent)
        if self.is_trigger_effect:
            magic_damage_deal = opponent.calculate_magic_damage(champion)
            life_steal = magic_damage_deal * 0.3
            champion.recover(life_steal)
            self.hit_count = 0
        else:
            self.hit_count = self.hit_count + 2
            if self.hit_count >= 9:
                self.is_trigger_effect = True
        print("HIT COUNT", self.hit_count)
