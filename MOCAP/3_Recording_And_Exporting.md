[MOCAP Tutorials](README.md) | [Home](../../README.md)

-------------------------------------------------------------------------------

# 🎥 Intro to Record & Export Motion Data in Axis Studio

This guide walks you through how to record motion capture data using **Perception Neuron 3 (PN3)** and export it in **.BVH format** using **Axis Studio**.

---

## ✅ Preparation
Make sure:
- Sensors are **fully calibrated**
- Avatar in Axis Studio **accurately mirrors movement**
- Workspace is clear and tracking looks smooth

---

## 1. Go to the **Record Panel**
- Click the **🎥 Record tab** from the top navigation bar
- Open **Record Settings**:
  - Set file format to `.bvh`
  - Choose output folder location
  - Set frame rate (default is usually **60 FPS**)

---

## 2. Add Metadata (Optional)
- Name your file (e.g., `walk_cycle_001`)
- Add a **Performer ID** and **notes** for organization

---

## 3. Start & Stop Recording
- Click **Start Recording**
- Perform your motion sequence
- Click **Stop Recording** to end the session

Axis Studio automatically saves your recording in the selected folder.

---

## 4. Locate the Recorded File
- Open your **output folder** in File Explorer
- Look for the `.bvh` file you just recorded
- You can open and preview `.bvh` files in:
  - **Blender**
  - **MotionBuilder**
  - **DeepMotion**
  - Any .bvh-compatible software

---

## 5. Export from Playback (Optional)
If you recorded in a different format and want to convert to `.bvh`:
- Open the **Playback tab**
- Load the recording
- Click **Export**
- Choose `.bvh` as the output format and save

---

## Tips
- Use consistent file names: `performer_date_take.bvh`
- Recalibrate if the performer changes or if tracking seems off
- Review the motion in **Axis Studio’s playback** before exporting

---

