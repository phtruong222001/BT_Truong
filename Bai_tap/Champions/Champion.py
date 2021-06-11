class Champion:

    def __init__(self, name, hp, attack_damage, ability_power, armor, magic_armor, speed, true_damage, max_hp, button_q,
                 button_w, button_e, button_r):
        self.name = name
        self.hp = hp
        self.attack_damage = attack_damage
        self.ability_power = ability_power
        self.armor = armor
        self.magic_armor = magic_armor
        self.speed = speed
        self.true_damage = true_damage
        self.max_hp = max_hp

        self.button_q = button_q
        self.button_w = button_w
        self.button_e = button_e
        self.button_r = button_r

    def travelled_distance(self, time):
        return self.speed * time

    def calculate_physical_damage(self, champion):
        return champion.attack_damage * (1 - (self.armor / (100 + self.armor)))

    def calculate_magic_damage(self, champion):
        return champion.ability_power * (1 - (self.magic_armor / (100 + self.magic_armor)))

    def calculate_true_damage(self, champion):
        print("CURRENT HP:", self.hp)
        return champion.true_damage

    def calculate_hp_after_taken_damage(self, champion, is_physical_damage, is_magic_damage, is_true_damage):
        physical_damage_taken = self.calculate_physical_damage(champion) if is_physical_damage else 0
        magic_damage_taken = self.calculate_magic_damage(champion) if is_magic_damage else 0
        true_damage_taken = self.calculate_true_damage(champion) if is_true_damage else 0
        total_damage = physical_damage_taken + magic_damage_taken + true_damage_taken
        self.hp = self.hp - total_damage
        print("CURRENT HP: ", self.hp)

    def use_q(self, opponent):
        self.button_q.activate(self, opponent)

    def use_w(self, opponent):
        self.button_w.activate(self, opponent)

    def use_e(self, opponent):
        self.button_e.activate(self, opponent)

    def use_r(self, opponent):
        self.button_r.activate(self, opponent)

    def recover(self, life_steal):
        self.hp = self.hp + life_steal
        print("CURRENT HP AFTER RECOVER:", self.hp)
