import tkinter as tk
from tkinter import ttk
import turtle
import vpython as vp
import threading
import time
import math

class InteractiveLessonsApp:
    """
    A standalone desktop application to demonstrate interactive Python lessons
    using tkinter for the GUI, turtle for 2D graphics, and VPython for 3D graphics.
    """

    def __init__(self, root):
        self.root = root
        self.root.title("Interactive Python Lessons")
        self.root.geometry("650x550")

        # Create a tabbed interface
        self.notebook = ttk.Notebook(root)
        self.notebook.pack(expand=True, fill='both', padx=10, pady=10)

        # --- Turtle Graphics Tab ---
        self.turtle_frame = ttk.Frame(self.notebook, padding="10")
        self.notebook.add(self.turtle_frame, text='Turtle Hand-Pump Drawer')
        self.setup_turtle_tab()

        # --- VPython Tab ---
        self.vpython_frame = ttk.Frame(self.notebook, padding="10")
        self.notebook.add(self.vpython_frame, text='VPython 3D Simulator')
        self.setup_vpython_tab()

    def setup_turtle_tab(self):
        """Sets up the widgets and canvas for the turtle graphics lesson."""
        controls_frame = ttk.Frame(self.turtle_frame)
        controls_frame.pack(side='top', fill='x', pady=5)

        # Sliders for controlling the drawing
        self.base_width = tk.IntVar(value=100)
        base_slider = ttk.Scale(controls_frame, from_=50, to=200, orient='horizontal', variable=self.base_width, command=self.redraw_pump)
        base_slider.pack(side='left', expand=True, fill='x', padx=5)
        ttk.Label(controls_frame, text="Base Width").pack(side='left')

        self.post_height = tk.IntVar(value=150)
        height_slider = ttk.Scale(controls_frame, from_=50, to=300, orient='horizontal', variable=self.post_height, command=self.redraw_pump)
        height_slider.pack(side='right', expand=True, fill='x', padx=5)
        ttk.Label(controls_frame, text="Post Height").pack(side='right')

        # Canvas to host the turtle drawing
        canvas = tk.Canvas(self.turtle_frame, width=500, height=400)
        canvas.pack(pady=10)

        self.turtle_screen = turtle.TurtleScreen(canvas)
        self.turtle_pen = turtle.RawTurtle(self.turtle_screen)
        self.turtle_screen.tracer(0) # Turn off automatic screen updates

        self.redraw_pump() # Initial drawing

    def redraw_pump(self, _=None):
        """Clears and redraws the hand pump based on slider values."""
        pen = self.turtle_pen
        pen.reset()
        pen.hideturtle()
        pen.speed(0)

        base_width = self.base_width.get()
        post_height = self.post_height.get()

        # Drawing logic
        pen.penup()
        pen.goto(-base_width / 2, -150)
        pen.pendown()
        
        pen.fillcolor("gray")
        pen.begin_fill()
        for _ in range(2):
            pen.forward(base_width)
            pen.left(90)
            pen.forward(20)
            pen.left(90)
        pen.end_fill()
        
        pen.penup()
        pen.goto(0, -130)
        pen.setheading(90)
        pen.pendown()
        pen.fillcolor("darkred")
        pen.begin_fill()
        pen.forward(post_height)
        pen.right(90)
        pen.forward(10)
        pen.right(90)
        pen.forward(post_height)
        pen.end_fill()

        pen.penup()
        pen.goto(10, -130 + post_height)
        pen.pendown()
        pen.setheading(160)
        pen.forward(100)

        self.turtle_screen.update()

    def setup_vpython_tab(self):
        """Sets up the controls for the VPython simulation."""
        ttk.Label(self.vpython_frame, text="VPython simulation will open in a new window.").pack(pady=10)
        
        self.pump_speed = tk.DoubleVar(value=5.0)
        speed_slider = ttk.Scale(self.vpython_frame, from_=1, to=20, orient='horizontal', variable=self.pump_speed)
        speed_slider.pack(fill='x', padx=20, pady=5)
        ttk.Label(self.vpython_frame, text="Pump Speed").pack()

        start_button = ttk.Button(self.vpython_frame, text="Start 3D Simulation", command=self.run_vpython_simulation)
        start_button.pack(pady=20)

    def run_vpython_simulation(self):
        """Runs the VPython animation in a separate thread to not block the GUI."""
        # VPython is best run in its own thread to avoid blocking the tkinter main loop
        sim_thread = threading.Thread(target=self._vpython_loop, daemon=True)
        sim_thread.start()

    def _vpython_loop(self):
        """The core VPython animation logic."""
        # Create a new scene or get the existing one
        try:
            scene = vp.canvas.get_selected()
            scene.delete() # Clear previous objects if any
        except:
            scene = vp.canvas(width=600, height=400, background=vp.color.cyan)

        # Create 3D objects
        pivot = vp.vector(0, 0, 0)
        handle = vp.cylinder(pos=pivot, axis=vp.vector(5, 0, 0), radius=0.2, color=vp.color.red)
        base = vp.cylinder(pos=vp.vector(0, -2, 0), axis=vp.vector(0, 4, 0), radius=0.5, color=vp.color.gray(0.7))
        
        angle = 0
        droplets = []

        while True:
            vp.rate(30) # Limit to 30 frames per second
            
            speed = self.pump_speed.get()
            angle += speed * 0.01
            
            handle.axis = vp.vector(5 * math.cos(angle), 5 * math.sin(angle), 0)
            
            # Spawn a water droplet when the handle is near the bottom
            if 0.95 < math.sin(angle) < 1.0 and len(droplets) < 50:
                droplet = vp.sphere(pos=vp.vector(-5, 0, 0), radius=0.1, color=vp.color.blue, make_trail=True, trail_type="points", trail_radius=0.05)
                droplet.velocity = vp.vector(0, -1, 0)
                droplets.append(droplet)

            # Animate droplets falling
            for d in droplets:
                d.pos += d.velocity * 0.1
                if d.pos.y < -5:
                    d.visible = False
                    droplets.remove(d)

if __name__ == "__main__":
    root = tk.Tk()
    app = InteractiveLessonsApp(root)
    root.mainloop()