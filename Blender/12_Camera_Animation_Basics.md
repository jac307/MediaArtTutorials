# 🧱 Camera Animation Basics  

**Time:** 1 hour, 30 min

---

## 🎯 Objective
Use Blender’s **Timeline** and **Dope Sheet** to animate one meaningful camera movement and export a short video clip.

---

## 🔧 Tools You’ll Use

| Tool / Concept             | Shortcut / Location                  | Purpose                                      |
|----------------------------|--------------------------------------|----------------------------------------------|
| Add Camera                 | `Shift + A → Camera`                 | Place a camera in your scene                 |
| Set Camera View            | `Ctrl + Alt + Numpad 0`              | Align active camera to your current view     |
| Move / Rotate              | `G`, `R` (plus X, Y, Z for axis)     | Position camera and aim it properly          |
| Insert Keyframe            | `I` in 3D Viewport                   | Record camera location/rotation over time    |
| Timeline                   | Bottom window in layout              | View and adjust keyframes                    |
| Dope Sheet                 | Switch from Timeline to Dope Sheet   | Fine-tune animation timing                   |
| Preview Animation          | `Spacebar`                           | Play your animation                          |

---

## 🎬 Step-by-Step Instructions

### 🎥 Step 1: Follow These Tutorials First

Watch and apply these camera animation techniques in your own Blender scene.  
For each video, **recreate the movement using keyframes**, then render a short preview (5–10 sec).

1. **Basic Camera Pan**  
   🎞️ [Pan Movement Tutorial](https://www.youtube.com/watch?v=wMzvWfINzpY)  
   → Animate a side-to-side camera slide

2. **Smooth Orbit Around Object**  
   🎞️ [Orbiting a Character or Object](https://www.youtube.com/watch?v=DNzEPOXax1I)  
   → Rotate the camera around your character

3. **Zoom In or Out**  
   🎞️ [Zoom Camera Animation](https://www.youtube.com/watch?v=w4jPmiVXME4)  
   → Pull camera in or out slowly

> ✅ Apply each type of movement directly in your scene and export a tiny preview (Render → Animation).

---

### 🎥 Step 2: Add Your Own Camera and Keyframes

1. **Open Your Scene**
   - Use the environment file with your character

2. **Add and Place the Camera**
   - `Shift + A → Camera`
   - `Ctrl + Alt + Numpad 0` to snap it to your current view
   - Use `G` and `R` to move and aim the camera

3. **Insert First Keyframe**
   - Set timeline to **Frame 1**
   - Press `I → Location & Rotation`

4. **Move the Camera**
   - Go to **Frame 60** or **Frame 120**
   - Move and rotate camera (`G`, `R`)
   - Press `I → Location & Rotation`

5. **Preview & Adjust**
   - `Spacebar` to preview
   - Use **Dope Sheet** to refine timing
   - Optional: Open **Graph Editor** to adjust speed curves

---

## 💾 Export Your Animation

- Go to `Render Properties → Output`
- Set file format: `.FFMPEG video`
- Set resolution: 1920x1080
- Set frame rate: 24 fps
- File → Render → Render Animation  
- Save as `YourName_CameraMove.mp4`

---

## 📝 Reflection Prompt

> How did your camera motion affect the scene?  
> Does it make the moment feel slow, fast, intense, peaceful, or cinematic?

---

