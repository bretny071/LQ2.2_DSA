dog_breed = input("Enter dog breed: ")

while True:
    try:
        print_count = int(input("Enter the number of times to print the dog breed: "))
        if print_count > 0:
            
        else:
            print("Please enter a positive integer.")
    except ValueError:
        print("Invalid input. Please enter an integer.")

for _ in range(print_count):
    print(dog_breed)
