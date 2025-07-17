[Blender Tutorials](README.md) | [Home](../../README.md)

---

# 🦴 Tips for Weight Painting in Blender 

---

## 🦴 What is Weight Painting?

add something here

---

## 🔧 Tools You’ll Use

[add here shortcuts for going into Pose and Weight Paint Mode]

### Tips for Weight Painting in Blender

- **Erase Default Weight Painting (Start from Scratch)**:  
  If Blender’s automatic weight painting gives poor results, you can reset everything and manually paint from a clean slate:

  1. Select your **Mesh**, go to the **Object Data Properties** tab (green icon with three connected dots).  
  2. In the **Vertex Groups** section, delete all groups.  
  3. Go to the **Modifiers** tab and remove the **Armature Modifier**.  
  4. Re-parent: Select the **Mesh**, then `Shift + Click` the **Armature**. Press `Ctrl + P` and choose **With Empty Groups**.  
  5. Check that the **Armature Modifier** has been re-added under **Modifiers**, and that bones now appear under **Vertex Groups** in Object Data.  
  6. Select the **Armature**, then `Shift + Click` the **Mesh** and switch to **Weight Paint Mode**.  
  → Each bone now has no influence by default — paint only where you want each bone to affect the mesh.

- **Enable Projected Falloff**:  
  Select the **Brush**, go to the **Tool Settings** panel on the right, click **Settings**, then under **Falloff**, choose **Projected**.  
  → This allows you to paint more effectively across complex surfaces and multiple faces.

- **Use Mirror Painting**:  
  In the **same Settings panel**, go to the **Mirror** section and enable **X-Axis Mirror**.  
  → This lets you mirror your weight painting across symmetrical limbs (like arms or legs), saving time and ensuring balance.

- **Pose and Refine**:  
  Switch to **Pose Mode**, move your character into a new position, then return to **Weight Paint Mode**.  
  → Posing helps expose areas that are hard to reach in the default pose, making it easier to fine-tune weights where the mesh isn't deforming correctly.

- **Use Auto Normalize**:  
  In the **Tool Settings** under **Options**, make sure **Auto Normalize** is turned on.  
  → This ensures all vertex weights across bones add up to 1.0, preventing deformation issues and making your painting more predictable and accurate.


---
