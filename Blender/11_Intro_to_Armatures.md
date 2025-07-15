[Blender Tutorials](README.md) | [Home](../../README.md)

---

# 🦴 Intro to Armatures (Rigging)
**Time:** 1 hour

---

## 🎯 Objective  

**Goal**: Rig your character by adding an armature (bones) to your character, pose them, and create expressive still shots using camera and lighting.

## 🦴 What is Rigging?

**Rigging** is the process of creating a digital skeleton (called an *armature*) for a 3D model so it can move. Each "bone" in the armature controls part of the model, allowing artists to pose and animate characters or objects. Rigging connects the static mesh to this bone structure using *weight painting*, which determines how much each bone influences nearby parts of the model. It's a key step for bringing 3D characters to life in animation and games.

---

## 🔧 Tools You’ll Use

| **Tool / Feature**         | **Shortcut / Location**                   | **Purpose / Use**                                               |
|---------------------------|--------------------------------------------|-----------------------------------------------------------------|
| **New Blender File**       | `File → New → General`                    | Start fresh to practice armatures                               |
| **Add Armature**           | `Shift + A → Armature → Single Bone`      | Add the first bone to start building a skeleton                 |
| **Edit Mode**              | `Tab`                                     | Switch to edit bone structure                                   |
| **Extrude Bone**           | `E`                                       | Extend the armature by adding connected bones                   |
| **Bone Tab**               | Properties Panel → Bone icon              | Rename and adjust individual bones                              |
| **Apply Armature Modifier**| Properties Panel → Modifiers tab          | Apply armature to the mesh (after parenting)                    |
| **Parent to Armature**     | Select mesh, then armature → `Ctrl + P` → With Automatic Weights | Bind the mesh to the skeleton                                   |
| **Weight Paint Mode**      | Select mesh → Mode dropdown → Weight Paint| Adjust how bones influence parts of the mesh                    |
| **Pose Mode**              | Select armature → Mode dropdown or `Ctrl + Tab` | Pose your character by rotating bones                    |
| **Rotate Bone**            | `R`                                       | Rotate bones for posing                                         |
| **Viewport Navigation**    | `Scroll`, `MMB`, `Shift + MMB`            | Zoom, rotate, and pan your scene                                |
| **Camera + Lighting**      | `Shift + A → Camera / Light`              | Add camera and lights for rendering poses                       |
| **Render Image**           | `F12`                                     | Render a still image from your scene                            |
| **Save Render**            | `Image → Save As` (in Render window)      | Save a .png or .jpg from the rendered image                     |
| **File Save**              | `File → Save As`                          | Save your .blend file with a clear name                         |


---

## Step 1: Learn the Basics of Armatures

**Open a New Blender File**  
- Go to `File → New → General`  
- Save as: `YourName_ArmaturePractice.blend`

**Watch and follow this tutorial** 

Follow along in Blender and try:
- Adding an armature: `Shift + A → Armature → Single Bone`
- Going into Edit Mode to add more bones (`Tab`)
- Extruding (`E`) to add limbs
- Switching between **Edit**, **Pose**, and **Object** Modes

<iframe width="560" height="315" src="https://www.youtube.com/embed/gdOaUv0_TC8?si=lY-v3eS2EEH05ESC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/SCWZr-It1bE?si=XcuTrHcMCQjnLu1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Step 2: Add Bones to Your Character

**Open Your Character File**  
- File → Open → `YourName_Character.blend`

🦴 **Add an Armature**
- `Shift + A → Armature → Single Bone`
- Enter **Edit Mode** (`Tab`) to build your skeleton --use wireframeview
- Select one end of the Bone, then use `E` to extrude more bones
- Follow the tutorial to learn how to link your object to your armature and go into **Pose Mode**

Think about the shape of your character:
- Robot or blocky? You may only need a few bones.
- Humanoid or organic? Add a basic spine, arms, and legs.
- Unusual shape? Be creative with the rig!

<iframe width="560" height="315" src="https://www.youtube.com/embed/SqnhLzPw8Kc?si=8-yDlE5celFgs9rg&amp;start=143" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2nlMZx0vp6E?si=pvxFyvKawCh5Ntq5&amp;start=143" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Possible solution to the problem of character not moving after applying armature as parent

<iframe width="560" height="315" src="https://www.youtube.com/embed/s2BkEVxUXKE?si=k-yHv7tw2cp6jHXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Step 3: Pose and Capture Your Character

👾 **Pose Your Character**
- Switch to **Pose Mode**
- Use `R` (rotate) to change bone angles
- Experiment with expressive poses
- ⚠️ For now, just pose your character. **Don’t animate with armatures yet**.

📷 **Set Up a Camera and Lights**
- Add or adjust camera angle and lighting (use earlier guides)

💾 **Render Still Images**
- Use `F12` to render a single shot
- Save as `.png`: `Image → Save As`

🎯 Try rendering 2–3 different poses!

<iframe width="560" height="315" src="https://www.youtube.com/embed/YtRpBj_T07Q?si=hLa5lY-l56yf09Wk&amp;start=143" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 💡 Tips
- Keep bones simple—this is just a pose, ⚠️ **not full animation**
- Zoom in/out with `Scroll`, rotate with `Middle Mouse`, pan with `Shift + Middle Mouse`
- Use the **Bone tab** to rename or tweak bones
- If your mesh doesn’t move with the bones, don’t worry—we’re focusing on visual posing for now

---

