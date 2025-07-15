[MOCAP Tutorials](README.md) | [Home](../../README.md)

-------------------------------------------------------------------------------

# 🌀 Re-targeting Movements in Blender  
## Using Motion Capture Data from Perception Neuron 3 (.bvh)

---

### 📌 What is MOCAP and Retargeting?

**Motion Capture (MOCAP)** is a technique for recording human movement and translating it to a digital character. In this guide, we use **.bvh files** captured with Perception Neuron 3 (PN3) and apply that movement to a custom 3D model in **Blender**.

**Retargeting** refers to the process of **mapping motion data from one skeleton (e.g., a BVH armature)** onto another (e.g., your character model), allowing different rigs or body types to perform the same animation.

---

## Option 1: Manual Retargeting (No Armature on Import)

This method works best when you want to manually align BVH motion to a static mesh model without pre-existing rig constraints.

### 💡 Tips
- Avoid scaling bones in **Edit Mode** — this can break animation playback  
- Use orthographic views (`Numpad 1/3/7`) to check alignment  
- You can clean up or simplify keyframes using the **Graph Editor**

---

### Step-by-Step Instructions

1. **Import Your Character Mesh**  
   - In Blender, go to `File → Import → OBJ/FBX` (or whatever format your model is in)  
   - Make sure your model **does not include an armature**
  
![Sensor Check](images/import-mocap-1)

2. **Import Your BVH File**  
   - Go to `File → Import → Motion Capture (.bvh)`  
   - Select your `.bvh` file  
   - Before importing: In the **Transform** panel on the right, set the **Scale** to `0.1`  
   - Click **Import BVH**  
   - This will create a **BVH armature** with baked motion keyframes

![Sensor Check](images/import-mocap-2)

3. **Align BVH Scale with Character**  
   - Your mocap character may appear larger/smaller than your mesh  
   - Use **`S` (scale)** on the **BVH armature only** (Object Mode)  
   - Do **not scale the armature in Edit Mode** or using non-uniform transforms

![Sensor Check](images/import-mocap-3)

4. **Match Bone Positions**  
   - Select the **BVH armature**  
   - Enter **Edit Mode**  
   - Move and adjust bones so they **visually align with your character’s mesh**  
   - Focus on key joints like the **shoulders, hips, knees, and feet** for accurate alignment

![Sensor Check](images/import-mocap-4)

5. **Parent the Mesh**  
   - If desired, use modifiers or parenting (`Ctrl+P → With Automatic Weights`)  
   - Note: This works only if the character mesh is roughly aligned and weight-painted

![Sensor Check](images/import-mocap-4)

6. **Play the Timeline**  
   - Press `Spacebar` or drag the timeline to preview the movement  
   - Your BVH skeleton should animate based on the captured motion

---

## 🔄 Option 2: [Coming Soon]

This section will cover using **Rigify or other rig retargeting systems** for automated bone mapping and constraint setup.

---

