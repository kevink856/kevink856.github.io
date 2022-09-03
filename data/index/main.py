import tkinter as tk
import time
from random import randint
from random import random

window = tk.Tk()
window.title("Hello world")
window.geometry("700x400")
window.configure(bg="blue")
canvas = tk.Canvas(window,width=700,height=400)
canvas.configure(bg="black")
canvas.pack()

nums = [0 for x in range(70)]
rects = [None for x in range(70)]

for x in range(len(rects)):
  width = 700/len(rects)
  height = randint(0,400)+random()
  nums[x] = height
  rect = canvas.create_rectangle(width*x,700,width*(x+1),400-height,fill="white")
  rects[x] = rect

for x in range(len(nums)-1):
  for y in range(len(nums)-1-x):
    if(nums[y]>nums[y+1]):
      temp = nums[y]
      nums[y] = nums[y+1]
      nums[y+1] = temp
      canvas.move(rects[y],10,0)
      canvas.move(rects[y+1],-10,0)
      temp = rects[y]
      rects[y] = rects[y+1]
      rects[y+1] = temp
      time.sleep(0.001)
      canvas.update_idletasks()

tk.mainloop()