#This is a test project to expirement with Python
"""
And this is a block comment!
"""

#Var notes: Can only start with letter / _, can only contain letters / number / _, case sens.
testMessage = "This is a test!"
x = 10
_y = 4.0
Z0 = float(3)

x = y = z = 0
x, y, z = 10, -2, 3

#Must declare methods before calls
def printList(input_list):
    for i in input_list:
        print(i)

# -------------------------------- Strings --------------------------------

str = "Test String"
expected = 'Test String'
print(str == expected)

expected = 'Test'
print(str[0:4] == expected)

expected = "String"
print(str[5:] == expected)

expected = "g"
print(str[-1] == expected)

# * Formatting:
str = "Language: {}, Version: {}"
print(str.format("Python", 1.0))

str = "Language: {4}, Version: {2}, Build Version: {1}, Title: {0}, Author: {3}"
print(str.format("Python Project", 3, 1.0, "Kevin Kim", "Python"))

'''
Escape char.'s:
\' 	    Single Quote 	
\\ 	    Backslash 	
\n 	    New Line 	
\r 	    Carriage Return 	
\t 	    Tab 	
\b 	    Backspace 	
\f 	    Form Feed 	
\ooo 	Octal value 	
\xhh 	Hex value
'''


# -------------------------------------------------------------------------

#Unpacking a list:
example_list = [4, 2, 1]
x, y, z = example_list

variable_list = [x, y, z]
printList(variable_list)

print("Type of x is:")
print(type(x))