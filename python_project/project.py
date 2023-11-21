import random

def hangman():
    words = ["the shawshank redemption",
"the godfather",
"the dark knight",
"pulp fiction",
"the lord of the rings: the return of the king",
"schindler's list",
"fight club",
"forrest gump",
"inception",
"the matrix",
"the silence of the lambs",
"the godfather: part ii",
"star wars: episode iv - a new hope",
"the empire strikes back",
"the green mile",
"the shawshank redemption",
"goodfellas",
"the lord of the rings: the fellowship of the ring",
"the dark knight rises",
"the lord of the rings: the two towers",
"the usual suspects",
"the lion king",
"se7en",
"gladiator",
"titanic",
"the departed",
"saving private ryan",
"the pianist",
"django unchained",
"the intouchables",
"the prestige",
"the grand budapest hotel",
"inglourious basterds",
"the avengers",
"the wolf of wall street",
"jurassic park",
"the truman show",
"the revenant",
"the great gatsby",
"the shining",
"a clockwork orange",
"gone with the wind",
"casablanca",
"back to the future",
"eternal sunshine of the spotless mind",
"the breakfast club",
"raiders of the lost ark",
"the matrix reloaded",
"the matrix revolutions",
"avatar",
]

    word = random.choice(words)
    hidden_word = ['_'] * len(word)

    guessed_letters = []

    incorrect_guesses = 0

    while '_' in hidden_word and incorrect_guesses < 6:
        print(' '.join(hidden_word))
        print(f'Guessed letters: {", ".join(guessed_letters)}')
        print(f'Incorrect guesses: {incorrect_guesses}')

        guess = input('Guess a letter: ').lower()


        if guess in guessed_letters:
            print('You already guessed that letter!')
            continue

        guessed_letters.append(guess)

        if guess in word:

            for i in range(len(word)):
                if word[i] == guess:
                    hidden_word[i] = guess
        else:

            incorrect_guesses += 1
            print('Incorrect guess!')


    print(' '.join(hidden_word))
    if '_' not in hidden_word:
        print('Congratulations, you guessed the word!')
    else:
        print(f'Sorry, you ran out of guesses. The word was {word}.')

hangman()