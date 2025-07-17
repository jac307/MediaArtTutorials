[Blender Tutorials](README.md) | [Home](../../README.md)

---

# 🖍️ Tips for Weight Painting in Blender

---

## What is Weight Painting?

**Weight Painting** is the process of defining how much influence each bone in an armature has over the vertices of a 3D mesh. By painting different levels of "influence" (weights) onto the surface of your model, you control how it deforms when posed or animated. This is especially important for characters or creatures, where smooth, natural movement depends on well-balanced weights across joints like shoulders, elbows, and knees.

---

## 🔧 Tools You’ll Use

| **Tool / Mode**       | **Shortcut / Location**                                 | **Use**                                             |
|------------------------|----------------------------------------------------------|------------------------------------------------------|
| Pose Mode              | `Ctrl + Tab` (or use Mode dropdown)                      | Poses the skeleton to test deformation               |
| Weight Paint Mode      | `Ctrl + Tab` (or use Mode dropdown)                      | Paints bone influence directly onto the mesh         |
| Toggle X-Axis Mirror   | Tool Settings → Mirror                                   | Mirrors brush strokes across the X-axis              |
| Falloff Settings       | Tool Settings → Settings → Falloff → Projected           | Enables painting across curved and hidden surfaces   |
| Auto Normalize         | Tool Settings → Options → Auto Normalize                 | Keeps total bone influence at 100% for all vertices  |

---

## Tips for Weight Painting in Blender

### Erase Default Weight Painting (Start from Scratch)

If Blender’s automatic weight painting doesn’t work well, reset and start manually:

1. Select your **Mesh**, go to the **Object Data Properties** tab (green icon with 3 connected dots).  
2. In **Vertex Groups**, delete all the groups.  
3. Go to the **Modifiers** tab and remove the **Armature Modifier**.  
4. Re-parent: Select the **Mesh**, then `Shift + Click` the **Armature`. Press `Ctrl + P`, choose **With Empty Groups**.  
5. Confirm that the **Armature Modifier** and all bones now appear again in the **Vertex Groups** list.  
6. Select the **Armature**, then `Shift + Click` the **Mesh**, and switch to **Weight Paint Mode**.  
→ Each bone will have no influence — paint only where needed.

### Enable Projected Falloff

Select the **Brush**, then go to **Tool Settings → Settings → Falloff**, and choose **Projected**.  
→ This makes painting more accurate over complex or hidden surfaces.

### Use Mirror Painting

In the same **Tool Settings**, go to the **Mirror** section and enable **X-Axis Mirror**.  
→ Useful for symmetrical characters (e.g. left and right arms/legs).

### 🧍‍♂Pose and Refine

Switch to **Pose Mode**, adjust your rig, then return to **Weight Paint Mode**.  
→ This helps you access and fix hard-to-reach areas based on realistic poses.

### ⚖Use Auto Normalize

In **Tool Settings → Options**, turn on **Auto Normalize**.  
→ Prevents overlapping or uneven influence by ensuring all vertex weights total 1.0.

---
