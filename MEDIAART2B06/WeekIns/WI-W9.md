[MEDIAART 2B06](../README.md)

# Rough Cut

## Individual project

## Goal

Assemble the footage and production sound into a **complete rough cut** that follows the approved pre-production plan while allowing room for revision.

> Attendance, participation, and active engagement during class activities are part of the project rubric.

> During the final hour of the tutorial, the instructor and TAs will begin the **in-person grading check**. Your project folder, Premiere Pro project, autosaves, and temporary renders must be organized and ready for review.

## Project overview

- **Format:** Rough cut of a one-minute, no-dialogue short film
- **Project type:** Individual
- **Editing software:** Adobe Premiere Pro
- **Target rough-cut duration:** Approximately 1 minute
- **Maximum rough-cut duration at this stage:** 1 minute, 10 seconds
- **Maximum draft-assembly duration:** 2 minutes
- **Audio:** Room tone and on-scene production sound only
- **Colour:** Basic technical correction only

## Sequence settings

Create the sequence at **24 fps**.

Select one of the following frame sizes according to the aspect ratio chosen for the final film:

| Aspect ratio | Sequence frame size |
|---|---|
| **16:9** | 1920 × 1080 |
| **4:3** | 1440 × 1080 |
| **1.85:1** | 1920 × 1038 |
| **2.35:1** | 1920 × 817 |

> The original footage was recorded at 1920 × 1080. Choosing another aspect ratio will crop the recorded image.

## Project stages

Complete the following stages in order:

<!--
/////////////////
SECTION 1
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">1. Set up the Premiere Pro project</span>
    <span class="section-description">
      Create the project, confirm the folder structure, import the media, and prepare the sequence before editing.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Review the resources

Before editing, review:

- [W9 — Rough Cut Framework](../TechWalks/TW-W9.md){:target="_blank"}
- [W9 — Tutorials](../Tutorials/index.html?file=T-W9.json){:target="_blank"}
- Your script
- Your annotated storyboard
- Your revised production plan

## Create the Premiere Pro project

1. Open **Adobe Premiere Pro**.
2. Create a new project.
3. Name the project:

```text
ProjectName.prproj
```

4. Save it inside:

```text
00_ProjectFiles
```

5. Confirm that Premiere Pro is creating autosaves.
6. Save the project before importing media.

## Import the media

Import:

- All footage from `01_RawFootage`
- All production sound from `02_Audio`
- Any revised pre-production documents needed for reference

**In Premire Pro:** Organize the Project panel using bins that match the project structure.

Suggested bins:

```text
01_RawFootage
02_Audio
Sequences
Graphics
```

Do not move, rename, or delete source files after importing them into Premiere Pro.

## Create the sequence

Create a sequence using:

- **Frame rate:** 24 fps
- **Frame size:** Based on the selected aspect ratio
- **Audio sample rate:** 48 kHz

Name the first sequence:

```text
ProjectName_DraftAssembly
```

<div class="video-wrapper">
  <iframe
    src="https://www.iorad.com/player/2692272/Premiere-Pro-1--Project-Setup---Media-Import?iframeHash=mobilequick-1&src=iframe&oembed=1"
    title="Premiere Pro tutorial showing project setup and media import"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="camera; microphone; clipboard-write"
    sandbox="allow-scripts allow-forms allow-same-origin allow-presentation allow-downloads allow-modals allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation"
    allowfullscreen>
  </iframe>
</div>

</div>
</details>

<!--
/////////////////
SECTION 2
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">2. Review, mark, and select the footage</span>
    <span class="section-description">
      Watch every take, identify technically usable material, and select the strongest version of each planned shot.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review the guidance on [W9 — Reviewing Footage](../TechWalks/TW-W9.md#review){:target="_blank"}.

Do not begin by dragging every file directly into the timeline.

Open each clip in the **Source Monitor** and review it carefully.

## Mark usable sections

Use one or more of the following methods:

- **In and Out points**
- **Clip markers**
- **Label colours**
- Notes in the clip name or metadata

Do not delete any original footage.

## Evaluate each take

### Check Technical quality

- Focus
- Exposure
- White balance
- Framing
- Camera stability
- Recording errors
- Beginning and ending handles

### Check Performance and action

- Natural movement
- Clear beginning and ending
- Continuity
- Timing
- Connection with the surrounding shots
- Emotional clarity

Select the strongest take for each storyboard shot.

A technically imperfect take may still be useful when it provides the clearest action, strongest performance, or most effective rhythm. However, do not use footage with severe focus, exposure, stability, or recording problems unless no workable alternative exists.

<fieldset class="equipment-checklist">
  <legend>Footage-selection check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review every take.</strong>
      Watch the complete recording rather than judging it from the thumbnail.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Mark usable sections.</strong>
      Use In and Out points, markers, labels, or notes.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Compare repeated takes.</strong>
      Select the strongest technical and narrative option for each shot.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Keep all original footage.</strong>
      Do not delete files that are not selected for the rough cut.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 3
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">3. Build and review the draft assembly</span>
    <span class="section-description">
      Place the selected shots in story order without detailed trimming, effects, transitions, or sound design.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review:

- [W9 — Building the Draft Assembly](../TechWalks/TW-W9.md#draft-assembly){:target="_blank"}
- [W9 — Exporting Temporary Sequences](../TechWalks/TW-W9.md#temporary-sequence){:target="_blank"}

The draft assembly is the first complete version of the film that serves to reveal improvements with pacing, rythm, and continuity.

## Assembly rules

For this first sequence:

- Follow the planned story order.
- Place one selected shot after another.
- Do not trim yet. Leave shot as they are. 
- Do not add decorative transitions.
- Do not add effects.
- Do not add music, stock sound, sound effects, or foley.
- Keep the assembly no longer than **2 minutes**.

## Export the draft assembly

Export a temporary H.264 file as:

```text
ProjectName_DraftAssembly.mp4
```

Save it inside:

```text
03_Renders
```

## Watch and take notes

Watch the complete export from beginning to end without stopping.

Write down at least **three issues** that you will address during rhythm refinement.

Examples:

- A shot remains on screen too long.
- A shot ends too abruptly.
- Two shots repeat the same information.
- A moment is unclear.
- The order of the shots creates confusion.
- The action does not flow between two cuts.
- A section feels too slow or too rushed.

Do not correct the issues while watching. Identify them first, then return to the Premiere Pro sequence.

</div>
</details>

<!--
/////////////////
SECTION 4
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">4. Refine pacing and rhythm</span>
    <span class="section-description">
      Trim shots, remove repetition, improve transitions between actions, and reduce the sequence to approximately one minute.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review [W9 — Pacing and Rhythm](../TechWalks/TW-W9.md#pacing-rhythm){:target="_blank"}.

## Address the draft-assembly notes

Correct the issues identified during the previous stage.

## Refine shot duration

- Does the viewer have enough time to understand the important information?
- Does any shot continue after its purpose is complete?
- Does the cut occur before an action is readable?
- Do repeated shot lengths make the sequence feel mechanical?
- Does the pace support the emotional trajectory?

Use straight cuts in most situations.

Add a transition only when it communicates a specific relationship, such as:

- A passage of time
- A change of location
- A visual match
- A deliberate emotional shift

Avoid adding transitions only to decorate the edit.

## Duration target

At the end of this stage, the sequence should be approximately **1 minute**.

The maximum acceptable duration for the rough cut is:

```text
00:01:10
```

## Export the rhythm pass

Export:

```text
ProjectName_RhythmPass.mp4
```

Save it inside:

```text
03_Renders
```

Watch the export from beginning to end.

Identify at least **three remaining rhythm issues**, then return to the sequence and make small timing adjustments.

Do not over-edit. A change of a few frames may be enough.

</div>
</details>

<!--
/////////////////
SECTION 5
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">5. Apply basic colour correction</span>
    <span class="section-description">
      Correct technical differences in exposure, white balance, and contrast so connected shots appear visually consistent.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review [W9 — Visual Consistency and Basic Colour Correction](../TechWalks/TW-W9.md#visual-consistency){:target="_blank"}.

At this stage, apply **technical colour correction**, not creative colour grading.

## Watch and take notes

Review:

```text
ProjectName_RhythmPass.mp4
```

Identify two or three visual inconsistencies.

Examples:

- A shot is noticeably darker than the surrounding footage.
- A shot is noticeably brighter.
- The colour temperature changes between connected shots.
- A shot contains a strong green or magenta tint.
- Contrast changes abruptly.
- Neutral areas appear incorrectly coloured.

## Apply basic corrections

Use the **Lumetri Color** panel.

Focus on:

- Temperature
- Tint
- Exposure
- Highlights
- Shadows
- Whites
- Blacks
- Saturation
- Curves when necessary
- Colour Wheels and Match when necessary

Use scopes and visual comparison rather than relying only on the appearance of the computer screen.

## Restrictions

Do not apply:

- Stylized LUTs
- Heavy colour effects
- Extreme contrast
- Dramatic colour casts
- Final creative grading

The goal is visual consistency, not a finished cinematic look.

<fieldset class="equipment-checklist">
  <legend>Basic colour-correction check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Identify the inconsistencies first.</strong>
      Record the exposure, white-balance, and contrast problems before making changes.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Correct connected shots.</strong>
      Compare neighbouring clips and reduce visible jumps.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Keep the corrections subtle.</strong>
      Do not begin creative colour grading.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 6
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">6. Integrate basic production sound in Premiere Pro</span>
    <span class="section-description">
      Organize room tone and on-scene recordings, create continuity, balance clip levels, and prepare a clean audio foundation.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review [W9 — Basic Sound Integration](../TechWalks/TW-W9.md#basic-sound-integration){:target="_blank"}.

Complete the basic sound edit in **Adobe Premiere Pro**.

## Sound requirements

Use:

- Room tone recorded in each location
- On-scene production sound
- Synchronized camera or external-recorder audio when it supports the visible action

> Do not add music, stock sound, added sound effects, and foley recorded after production. These elements will be developed during the later sound-design stage.

## Organize the audio tracks

Use separate tracks for different sound functions.

For example:

| Track | Sound material |
|---|---|
| **A1** | Primary production sound |
| **A2** | Additional on-scene recordings |
| **A3** | Room tone |
| **A4** | Temporary or supporting production audio (TBA) |

Keep the track arrangement consistent throughout the sequence.

## Integrate room tone and on-scene sound

<fieldset class="equipment-checklist">
  <legend>Basic sound-integration checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Add room tone beneath each scene.</strong>
      Use the recording from the same location and extend it across cuts to prevent unexplained silence.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Place the on-scene recordings.</strong>
      Add footsteps, doors, objects, clothing, and other production sounds where they support the visible action.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Synchronize sounds when necessary.</strong>
      Use waveforms, the synchronization clap, visible impacts, or camera reference audio to align external recordings with the image.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Adjust the volume.</strong>
      Use Clip Gain, the clip volume line, or <strong>Effect Controls → Volume → Level</strong> to keep important sounds audible and below clipping.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Add short fades.</strong>
      Apply subtle fade-ins, fade-outs, or <strong>Constant Power</strong> transitions to prevent abrupt starts, stops, clicks, and changes in background sound.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Optional: repair an individual clip in Adobe Audition.</strong>
      Right-click the clip and select <strong>Edit Clip in Adobe Audition</strong> only when it requires advanced noise reduction, click removal, or precise waveform repair. Save the file and confirm that it updates in Premiere Pro.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Keep the sound edit simple.</strong>
      Do not apply detailed sound design or heavy processing. At this stage, focus on placement, synchronization, volume, and fades.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review the sequence using headphones.</strong>
      Check that room tone remains subtle, on-scene sounds match the image, and no audio clips or becomes distracting.
    </span>
  </label>
</fieldset>

## Export the rough preview

Export:

```text
ProjectName_RoughPreview.mp4
```

Save it inside:

```text
03_Renders
```

</div>
</details>

<!--
/////////////////
SECTION 7
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">7. Export the rough cut and create the information sheet</span>
    <span class="section-description">
      Review the rough preview, make final corrections, export the submission file, and prepare the supporting PDF.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Review the rough preview

Watch:

```text
ProjectName_RoughPreview.mp4
```
## Review the complete film

Watch the film from beginning to end without stopping.

<fieldset class="equipment-checklist">
  <legend>Rough-cut review checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the final shot order.</strong>
      Check that the sequence is complete and that every shot appears in the intended order.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the clarity of the action.</strong>
      Confirm that the visual progression and important actions are easy to understand.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review the rhythm and shot duration.</strong>
      Identify shots that remain too long, end too quickly, repeat information, or create abrupt cuts.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the overall duration.</strong>
      Check that the sequence meets the required runtime.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check exposure and white balance.</strong>
      Look for noticeable changes in brightness, colour temperature, or tint between connected shots.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check contrast and visual consistency.</strong>
      Confirm that highlights, shadows, and contrast remain coherent throughout the film.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check cropping, framing, and aspect ratio.</strong>
      Confirm that every shot fits the sequence correctly and that important visual information remains inside the frame.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check room tone and audio continuity.</strong>
      Confirm that background sound continues naturally across cuts and that there are no unexplained silent gaps.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check sound synchronization.</strong>
      Confirm that production sounds align with the visible actions.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check audio levels and quality.</strong>
      Listen for sounds that are too loud or quiet, clipping, distortion, abrupt changes, or distracting background noise.
    </span>
  </label>
</fieldset>

Make only the corrections required for a coherent rough cut.

The rough cut should communicate the complete story and final shot order. Detailed sound design, creative colour grading, and final polishing will be completed later.

## Export the rough cut

Export from Adobe Premiere Pro using:

- **Format:** H.264
- **File type:** MP4
- **Frame rate:** 24 fps
- **Resolution:** Match the sequence
- **Effects:** Disable unnecessary export effects
- **Audio:** Enabled

Save the file inside:

```text
04_Exports
```

Use the required filename:

```text
Lastname_Firstname_RoughCut.mp4
```

## Create the Rough Cut Information Sheet

Create a clear one-page PDF containing:

- **Title**
- **Aspect ratio**
- **Duration**
- **Author / Director**
- **Revised logline**
- **Working credits**, when other people supported the production

Export it as:

```text
Lastname_Firstname_RoughCut.pdf
```

Save the PDF inside:

```text
00_ProjectFiles
```

## Required deliverables

| Item | Required filename |
|---|---|
| Rough Cut Export | `Lastname_Firstname_RoughCut.mp4` |
| Rough Cut Information Sheet | `Lastname_Firstname_RoughCut.pdf` |

</div>
</details>

<!--
/////////////////
SECTION 8
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">8. Complete the in-person grading check and submit</span>
    <span class="section-description">
      Present the organized project folder during class and submit the rough cut MP4 and information sheet PDF.
    </span>
  </summary>

<div class="section-content" markdown="1">

## In-person grading check

During the final hour of the tutorial, have the complete project folder open and ready for review.

The instructor or TA will check:

### `00_ProjectFiles`

- `ProjectName.prproj`
- Premiere Pro autosaves
- `Lastname_Firstname_RoughCut.pdf`

### `03_Renders`

- `ProjectName_DraftAssembly.mp4`
- `ProjectName_RhythmPass.mp4`
- `ProjectName_RoughPreview.mp4`

### `04_Exports`

- `Lastname_Firstname_RoughCut.mp4`

Also be prepared to show:

- Organized footage in `01_RawFootage`
- Organized production sound in `02_Audio`
- Clearly named project media
- Working Premiere Pro links
- A sequence that opens without missing media

## Submission

Submit through Avenue to Learn:

| Item | Required filename |
|---|---|
| Rough Cut Export | `Lastname_Firstname_RoughCut.mp4` |
| Rough Cut Information Sheet | `Lastname_Firstname_RoughCut.pdf` |
| Project organization | Reviewed in person |

> Follow the submission protocol carefully. Incorrect filenames, missing files, missing temporary renders, disorganized project folders, or unavailable media may result in a **2-point deduction**.

</div>
</details>

---

Credits: Jessica A. Rodríguez
