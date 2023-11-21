import random
import time


number = random.randint(1, 10)


guess = int(input("Guess a number between 1-10: "))


start_time = time.time()


if guess == number and time.time() - start_time <= 3:
    print("Congratulations! You guessed the number correctly within 3 seconds.")
elif time.time() - start_time > 3:
    print("Sorry, time's up! You took too long to guess.")
else:
    print("Sorry, that's not the correct number.")
