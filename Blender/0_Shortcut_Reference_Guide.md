[Blender Tutorials](README.md) | [Home](../../README.md)

-------------------------------------------------------------------------------

# 🔤 Blender Shortcut Reference Guide

| 🔧 Action                        | ⌨️ Shortcut                  | 📌 Description                                               |
|----------------------------------|------------------------------|--------------------------------------------------------------|
| **Add Object**                   | `Shift + A`                  | Open Add Menu to insert mesh, light, camera, etc.            |
| **Move (Grab)**                  | `G`                          | Move selected object or element                              |
| **Rotate**                       | `R`                          | Rotate selected object or element                            |
| **Scale**                        | `S`                          | Scale selected object or element                             |
| **Select All**                   | `A`                          | Select all objects or elements                               |
| **Join Objects**                 | `Ctrl + J`                   | Combine selected objects into one mesh                       |
| **Delete Faces / Objects**       | `X` or `Delete`              | Delete selected items                                        |
| **Enter Edit Mode**              | `Tab`                        | Toggle between Object and Edit Modes                         |
| **Extrude Faces**                | `E` (in Edit Mode)           | Extend geometry from selected face/edge                      |
| **Inset Faces**                  | `I` (in Edit Mode)           | Add inset on selected face(s)                                |
| **Loop Cut**                     | `Ctrl + R` (in Edit Mode)    | Add loop cuts to refine geometry                             |
| **Bevel Edges**                  | `Ctrl + B` (in Edit Mode)    | Soften or round selected edges                               |
| **Snap Tool**                    | `Shift + Tab`                | Enable/disable snapping (align to grid/objects)              |
| **Save File**                    | `Ctrl + S`                   | Save your Blender file                                       |
| **Save As...**                   | `F2`                         | Save the file with a new name                                |
| **Frame Selected**               | `Numpad .`                   | Zoom in to the selected object                               |
| **Duplicate Object**             | `Shift + D`                  | Duplicate the selected object                                |
| **Undo**                         | `Ctrl + Z`                   | Undo the last action                                         |
| **Redo**                         | `Ctrl + Shift + Z`           | Redo the last undone action                                  |
| **Hide Object**                  | `H`                          | Hide selected object(s)                                      |
| **Unhide All**                   | `Alt + H`                    | Reveal hidden objects                                        |
| **Wireframe View**               | `Z → Wireframe`              | View the mesh in wireframe mode                              |
| **Solid View**                   | `Z → Solid`                  | View the mesh with basic shading                             |
| **Material Preview**             | `Z → Material Preview`       | Preview materials and textures                               |
| **Rendered View**                | `Z → Rendered`               | See lighting and full render mode                            |
| **Set Origin to Geometry**       | Right-click → Set Origin     | Set object origin to the mesh center                         |
| **Split Viewport**               | Right-click edge → Split     | Split workspace horizontally or vertically                   |
| **Toggle Sidebar**               | `N`                          | Show/hide right-side panel                                   |
| **Toggle Toolbar**               | `T`                          | Show/hide the left toolbar                                   |

---

## 🧰 Modifiers

| Modifier              | How to access   | Use for...                        |
|-----------------------|-----------------|-----------------------------------|
| Mirror                | Modifiers Tab   | Build symmetrical characters      |
| Subdivision Surface   | Modifiers Tab   | Smooth rounded shapes             |
| Array                 | Modifiers Tab   | Repeats objects in rows           |
| Boolean               | Modifiers Tab   | Combines or subtracts shapes      |
| Solidify              | Modifiers Tab   | Gives flat shapes a thickness     |
| Wireframe Modifier    | Modifiers Tab   | Start with a line “skeleton”      |
| Skin Modifier         | Modifiers Tab   | Wraps a mesh around your skeleton |

---

## 🦴 Rigging

| **Tool / Feature**         | **Shortcut / Location**                   | **Purpose / Use**                                               |
|---------------------------|--------------------------------------------|-----------------------------------------------------------------|
| **Add Armature**           | `Shift + A → Armature → Single Bone`      | Add the first bone to start building a skeleton                 |
| **Edit Mode**              | `Tab`                                     | Switch to edit bone structure                                   |
| **Extrude Bone**           | `E`                                       | Extend the armature by adding connected bones                   |
| **Bone Tab**               | Properties Panel → Bone icon              | Rename and adjust individual bones                              |
| **Apply Armature Modifier**| Properties Panel → Modifiers tab          | Apply armature to the mesh (after parenting)                    |
| **Parent to Armature**     | Select mesh, then armature → `Ctrl + P` → With Automatic Weights | Bind the mesh to the skeleton                                   |
| **Weight Paint Mode**      | Select mesh → Mode dropdown → Weight Paint| Adjust how bones influence parts of the mesh                    |
| **Pose Mode**              | Select armature → Mode dropdown or `Ctrl + Tab` | Pose your character by rotating bones                    |
| **Rotate Bone**            | `R`                                       | Rotate bones for posing                                         |

---
