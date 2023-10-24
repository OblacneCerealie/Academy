import random

num_numbers = int(input("How many numbers do you want to create? "))
start_interval = int(input("What is the start of the interval? "))
end_interval = int(input("What is the end of the interval? "))
filename = input("What do you want to name the file? ")

my_file = open(filename, mode="w", encoding="utf-8")
generated_numbers = set()
for index in range(num_numbers):
    my_random_number = random.randint(start_interval, end_interval)
    while my_random_number in generated_numbers:
        my_random_number = random.randint(start_interval, end_interval)
    generated_numbers.add(my_random_number)
    my_file.write(str(my_random_number) + "\n")
my_file.close()
