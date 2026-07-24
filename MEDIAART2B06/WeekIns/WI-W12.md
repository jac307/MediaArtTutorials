[MEDIAART 2B06](../README.md)

# Final Cut

## Individual project

## Goal

Complete the final picture, sound design, colour grade, titles, credits, and professional documentation for your one-minute short film.

The finished project must be technically complete, clearly organized, ready for assessment, and suitable for the public screening.

> Attendance, participation, and active engagement during class activities are part of the project rubric.

## Project overview

- **Format:** Final one-minute, no-dialogue short film
- **Project type:** Individual
- **Frame rate:** 24 fps
- **Picture duration:** Exactly 1 minute
- **Titles and credits:** Up to 10 additional seconds
- **Sound:** Final ambience, production sound, Foley, SFX, and optional instrumental music
- **Colour:** Final technical correction and creative colour grading

## Project stages

Complete the following stages in order:

<!--
/////////////////
SECTION 1
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">1. Confirm picture lock</span>
    <span class="section-description">
      Finalize the shot order, timing, transitions, aspect ratio, and one-minute picture duration before completing sound and colour.
    </span>
  </summary>

<div class="section-content" markdown="1">

Picture lock means that the visual structure is final.

After picture lock, do not:

- Add or remove shots
- Reorder shots
- Change shot duration
- Change the sequence duration
- Change the aspect ratio
- Make major transition changes

The final sound design and colour grade must adapt to the locked sequence.

## Review the latest sequence

Watch the complete film from beginning to end without stopping.

<fieldset class="equipment-checklist">
  <legend>Picture-lock review checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check story clarity.</strong>
      Confirm that the central action and emotional progression are understandable.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the shot order.</strong>
      Make sure every shot appears in the intended sequence.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review pacing and rhythm.</strong>
      Identify shots that feel too long, too short, rushed, or unnecessarily slow.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check continuity.</strong>
      Confirm that actions, movement direction, body positions, props, lighting, and backgrounds remain consistent across cuts.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Remove repetition.</strong>
      Identify shots or actions that repeat information without adding meaning.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm that every shot is necessary.</strong>
      Remove material that does not support the action, structure, or emotional trajectory.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review the transitions.</strong>
      Keep cuts and transitions clear, intentional, and visually consistent.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the aspect ratio and framing.</strong>
      Check that every shot fits the sequence correctly and that important visual information remains visible.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the beginning and ending.</strong>
      Confirm that the film starts and finishes clearly without accidental black frames or incomplete actions.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the total picture duration.</strong>
      Make sure the film itself is exactly one minute before titles and credits are added.
    </span>
  </label>
</fieldset>

## Finalize the picture and duration

<fieldset class="equipment-checklist">
  <legend>Final picture-lock checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Make only necessary picture changes.</strong>
      Trim or extend shots slightly, remove repetition, replace unusable footage, correct continuity, and adjust framing or scaling.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Keep transitions simple.</strong>
      Use straight cuts whenever possible and include other transitions only when they communicate a clear change in time, location, or action.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Re-record only when necessary.</strong>
      Record a replacement shot only when no existing take can be used.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the picture duration.</strong>
      The film must be exactly <code>00:01:00</code> before titles and credits.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the maximum final runtime.</strong>
      Opening and closing titles may add up to 10 seconds, for a maximum total duration of <code>00:01:10</code>.
    </span>
  </label>
</fieldset>

## Export the picture-lock review

Export:

```text
ProjectName_PictureLock.mp4
```

Save it inside:

```text
03_Renders
```

Watch the exported file from beginning to end before moving to the sound-design stage. Make corrections if need it. 

</div>
</details>

<!--
/////////////////
SECTION 2
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">2. Build the final sound design in Premiere Pro</span>
    <span class="section-description">
      Synchronize, organize, layer, edit, and balance ambience, production sound, Foley, SFX, and optional music.
    </span>
  </summary>

<div class="section-content" markdown="1">

Complete the final sound design and mix in **Adobe Premiere Pro**.

Review:

- [W10 — Sound Design Production Framework](../TechWalks/TW-W10.md){:target="_blank"}
- [W10 — Sound Design Production Tutorials](../Tutorials/index.html?file=T-W10.json){:target="_blank"}
- [W12 — Sound Design and Final Post-Production Tutorials](../Tutorials/index.html?file=T-W12.json){:target="_blank"}


## Import and organize the sound library

Import the prepared files from `02_Audio`.

**In Premiere Pro**, organize the Project panel using bins such as:

```text
ProdAudio
Ambience
Foley
SFX
Music
```

Use separate timeline tracks for different sound functions.

Suggested track structure:

| Track | Sound material |
|---|---|
| **A1–A2** | Primary production sound |
| **A3–A4** | Ambience and room tone |
| **A5–A6** | Foley |
| **A7–A8** | Sound effects |
| **A9–A10** | Instrumental music |

The exact number of tracks may change according to the project.

## Build the ambience foundation

Use room tone and ambience to establish the location and maintain continuity.

Check that:

- Every location has an acoustic identity.
- Background sound continues naturally across cuts.
- Interior and exterior spaces sound different when appropriate.
- Ambience does not disappear unexpectedly.
- Environmental changes support the visual transitions.

Use short fades or **Constant Power** transitions when separate ambience clips meet.

## Synchronize production sound and Foley

Align sounds with visible actions.

Use:

- Waveforms
- Synchronization claps
- Visible impacts
- Footsteps
- Doors
- Object contact
- Clothing movement
- Other clear action points

Check synchronization frame by frame when necessary.

## Add sound effects

Use SFX to reinforce or extend specific moments.

Sound effects should:

- Match the action
- Fit the scale and material of the visible object
- Support the environment
- Remain consistent with the film’s visual style
- Avoid sounding exaggerated unless exaggeration is intentional

## Add optional instrumental music

Music is optional.

When using music:

- Use instrumental music only.
- Confirm that it is appropriately licensed.
- Keep the film understandable without relying on music.
- Do not allow music to mask important ambience, Foley, or SFX.
- Use fades or keyframes to shape its entrance and exit.
- Credit the creator and licence in the Final Information Sheet.

## Balance the mix

Use:

- Clip Gain
- Volume keyframes
- Track volume
- Essential Sound
- Panning
- Parametric Equalizer
- DeNoise
- Compression
- Limiting
- Audio meters

Apply corrective processing only where it is needed.

## Optional advanced workflow: repair one file in Audition

Use Adobe Audition only when one individual audio file requires advanced repair.

Possible uses include:

- Removing an isolated click
- Repairing a damaged section
- Reducing consistent background noise
- Editing a waveform with greater precision

1. Select the audio clip in the Premiere Pro timeline.
2. Right-click the clip.
3. Select **Edit Clip in Adobe Audition**.
4. Complete the repair.
5. Save the file.
6. Return to Premiere Pro.
7. Confirm that the linked audio updated correctly.

Do not transfer the complete sequence to Audition.

## Review the final sound mix

<fieldset class="equipment-checklist">
  <legend>Final sound-mix checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Prevent clipping.</strong>
      Confirm that individual tracks and the master output remain below clipping.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Balance the sound layers.</strong>
      Make sure no ambience, Foley, SFX, production sound, or music layer consistently overpowers the others.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Preserve quiet details.</strong>
      Keep subtle sounds audible without raising background noise excessively.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Control loud sounds.</strong>
      Maintain their impact without distortion or excessive volume.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Keep music in a supporting role.</strong>
      Confirm that it does not mask important action sounds or dominate the film.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Test the complete mix.</strong>
      Listen through headphones and computer speakers and make any necessary level adjustments.
    </span>
  </label>
</fieldset>

## Export the audio-check review

Export:

```text
ProjectName_AudioCheck.mp4
```

Save it inside:

```text
03_Renders
```

Review the export using headphones.

Listen for:

- Missing sound layers
- Synchronization problems
- Abrupt starts or stops
- Clipping
- Excessive noise
- Inconsistent ambience
- Music overpowering the scene
- Sound that does not match the visible action
- Make necessary changes

</div>
</details>

<!--
/////////////////
SECTION 3
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">3. Complete the final colour grade</span>
    <span class="section-description">
      Confirm technical consistency, then shape a controlled visual palette that supports the film’s tone.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review:

[W12 — Colour in Film and Colour Grading Tutorials](../Tutorials/index.html?file=T-W12.json){:target="_blank"}

Colour correction and colour grading are different stages.

- **Colour correction** creates technical consistency.
- **Colour grading** shapes the final visual tone and mood.

## Confirm the base corrections

<fieldset class="equipment-checklist">
  <legend>Base colour-correction checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check exposure.</strong>
      Confirm that each shot retains usable detail and is not unintentionally too bright or too dark.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Correct white balance and tint.</strong>
      Remove unwanted colour casts and keep neutral areas consistent.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review highlight and shadow detail.</strong>
      Avoid clipped highlights and crushed shadows unless they are intentional.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Balance contrast and saturation.</strong>
      Keep the image clear and natural before applying the creative grade.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Match connected shots.</strong>
      Compare neighbouring clips and correct visible changes in brightness, colour, contrast, and saturation.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Use Lumetri Scopes and direct comparison.</strong>
      Evaluate the corrections using scopes and by comparing connected shots in the sequence.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Resolve technical problems before grading.</strong>
      Do not use the creative colour grade to hide unresolved exposure, white-balance, or consistency issues.
    </span>
  </label>
</fieldset>

## Apply the creative grade

Use the Lumetri Color panel to refine:

- Curves
- Highlights
- Shadows
- Midtones
- Contrast
- Saturation
- Colour balance
- Colour Wheels
- Vignette, when appropriate and subtle

Creative choices must remain consistent with the film.

## Review the sequence as a whole

Watch the film without stopping.

Check that:

- Connected shots belong to the same visual world.
- Skin, objects, and neutral areas remain believable when relevant.
- The visual treatment supports the emotional trajectory.
- The grade does not distract from the story.
- Titles remain readable against the graded image.

## Export the colour-check review

Export:

```text
ProjectName_ColourCheck.mp4
```

Save it inside:

```text
03_Renders
```

Review the exported file on a second screen when possible.  

</div>
</details>

<!--
/////////////////
SECTION 4
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">4. Add final titles and credits</span>
    <span class="section-description">
      Create clear opening and closing text that identifies the work and accurately credits every contributor and sourced element.
    </span>
  </summary>

<div class="section-content" markdown="1">

Add the opening and closing titles after the picture, sound, and colour are stable.

## Required title information

Include:

- Film title
- Author or director name
- Year
- Performer names
- Collaborator names
- Location support, when relevant
- Audio credits

For **on-screen audio credits**, include only:

- **Sound or music title**
- **Creator or author**

Complete source, website, licence, and access information should remain in the Final Information Sheet.

> Do not include the course name in the film titles.

## Design requirements

Titles must be:

- Clear
- Readable
- Simple
- Consistent with the visual design
- Visible long enough to read
- Positioned inside the safe area
- Legible against the background

Avoid:

- Excessive animation
- Decorative effects that distract from the film
- Too many fonts
- Very small text
- Low contrast
- Long credit sequences that exceed the runtime limit

## Runtime limit

The film must remain exactly one minute without titles.

Titles and credits may add:

```text
00:00:10 maximum
```

The complete final export must not exceed:

```text
00:01:10
```

</div>
</details>

<!--
/////////////////
SECTION 5
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">5. Export and review the final cut</span>
    <span class="section-description">
      Export the completed film, inspect the actual MP4, and correct any image, sound, title, or compression problems.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Export settings

Export from Adobe Premiere Pro using:

- **Filename:** `Lastname_Firstname_FinalCut.mp4`
- **Format:** H.264
- **Preset:** Match Source — Adaptive High Bitrate
- **Frame rate:** 24 fps
- **Resolution:** Match the sequence
- **Aspect ratio:** Match the sequence
- **Audio codec:** AAC
- **Range:** Entire Source
- **Audio:** Enabled
- **Effects:** Enable only the effects intentionally used in the final sequence

Save the final export inside:

```text
04_Exports
```

## Review the exported MP4

Do not assess the project only inside the Premiere Pro timeline.

Open:

```text
Lastname_Firstname_FinalCut.mp4
```

## Review the final export

Watch the complete export from beginning to end without stopping.

<fieldset class="equipment-checklist">
  <legend>Final export review checklist</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the complete picture.</strong>
      Confirm that there are no black frames, missing media, unexpected effects, or errors at the beginning or end.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the aspect ratio and framing.</strong>
      Confirm that the crop is correct and that all important visual information remains inside the frame.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check colour consistency.</strong>
      Look for unexpected changes in exposure, white balance, contrast, or saturation.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm that all sound layers are present.</strong>
      Check the production sound, ambience, Foley, SFX, and music used in the final mix.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check sound quality and continuity.</strong>
      Listen for clipping, distortion, unexplained silence, abrupt cuts, or synchronization problems.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Check the sound balance.</strong>
      Confirm that music, ambience, Foley, SFX, and production sound support one another without any layer consistently overpowering the others.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Review titles and credits.</strong>
      Confirm correct spelling, names, roles, readable text, and accurate on-screen audio credits using the sound or music title and creator or author.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Confirm the final duration.</strong>
      Check that the complete export follows the required runtime.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Re-export when necessary.</strong>
      Correct any picture, sound, title, credit, or duration problem and replace the previous export.
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
    <span class="section-title">6. Create the Final Information Sheet and representative stills</span>
    <span class="section-description">
      Prepare professional documentation that introduces the film, identifies its creators, and supports screening and portfolio use.
    </span>
  </summary>

<div class="section-content" markdown="1">

Review [W12 — Final Cut and Portfolio Framework](../TechWalks/TW-W12.md){:target="_blank"}.

## Export representative stills

Select two or three strong frames from the final sequence.

Choose images that:

- Represent the film’s visual style
- Show the main subject, action, or environment
- Have strong composition
- Have correct focus and exposure
- Offer visual variety
- Do not contain transitional blur unless intentional
- Do not include interface elements or editing controls

Export each still as PNG.

Required filenames:

```text
Lastname_Firstname_Still_01.png
Lastname_Firstname_Still_02.png
Lastname_Firstname_Still_03.png
```

Two stills are required. The third is optional.

## Create the Final Information Sheet

Create a one- or two-page PDF.

Include:

### Representative image

- One final still
- Large enough to communicate the visual character of the film
- Integrated into a clear and balanced layout

### Film information

- Title
- Director
- Country
- Year of completion
- Runtime
- Aspect ratio

### Logline

Write one or two concise sentences describing the central action, situation, or tension.

### Short synopsis

Write 100–150 words.

The synopsis should communicate:

- Character or subject
- Situation
- Development
- Shift or outcome

Do not explain every action or remove all ambiguity.

### Credits

Include all relevant roles:

- Director
- Editor
- Cinematography
- Performer
- Sound design
- Foley
- Music
- SFX
- Additional collaborators
- Location support

For sourced audio, include the title, creator, website, and licence.

## Design requirements

Use:

- Clear hierarchy
- Consistent typography
- Careful alignment
- Appropriate margins
- White space
- Balanced image and text placement
- Accurate spelling and punctuation

Export the document as:

```text
Lastname_Firstname_InfoSheet.pdf
```

Save it inside:

```text
00_ProjectFiles
```

<fieldset class="equipment-checklist">
  <legend>Documentation check</legend>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export at least two representative PNG stills.</strong>
      Use the required filenames and select visually strong frames.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Include complete film information.</strong>
      Identify the title, director, country, year, runtime, and aspect ratio.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Revise the logline and synopsis.</strong>
      Keep the writing concise, specific, and connected to the final film.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Complete the credits.</strong>
      Include every contributor and sourced audio element.
    </span>
  </label>

  <label class="checklist-item">
    <input type="checkbox">
    <span>
      <strong>Export the Final Information Sheet.</strong>
      Save <code>Lastname_Firstname_InfoSheet.pdf</code> inside <code>00_ProjectFiles</code>.
    </span>
  </label>
</fieldset>

</div>
</details>

<!--
/////////////////
SECTION 7
/////////////////
-->

<details class="tutorial-section">
  <summary>
    <span class="section-title">7. Build, verify, and submit the Final Cut Package</span>
    <span class="section-description">
      Assemble the final deliverables, complete the in-person grading check, verify the ZIP file, and submit the screening-ready package.
    </span>
  </summary>

<div class="section-content" markdown="1">

## Organize the project folder

Before the in-person grading check, confirm the following:

### `00_ProjectFiles`

- `ProjectName.prproj`
- Premiere Pro autosaves
- `Lastname_Firstname_InfoSheet.pdf`

An Audition `.sesx` file is not required.

### `03_Renders`

- `ProjectName_PictureLock.mp4`
- `ProjectName_AudioCheck.mp4`
- `ProjectName_ColourCheck.mp4`

### `04_Exports`

- `Lastname_Firstname_FinalCut.mp4`

Also be prepared to show:

- Organized raw footage
- Organized audio
- Working media links
- Final sequences
- Titles and credits
- The representative stills
- An up-to-date backup

## Create the Final Cut Package

Create:

```text
Lastname_Firstname_FinalPackage
```

Place inside:

```text
Lastname_Firstname_FinalPackage
├── Lastname_Firstname_FinalCut.mp4
├── Lastname_Firstname_InfoSheet.pdf
├── Lastname_Firstname_Still_01.png
├── Lastname_Firstname_Still_02.png
└── Lastname_Firstname_Still_03.png
```

The third still is optional.

## Compress the package

Compress the complete main folder as:

```text
Lastname_Firstname_FinalPackage.zip
```

Do not compress the individual files separately.

## Verify the ZIP file

Before submission:

1. Open the ZIP.
2. Confirm that the main folder is present.
3. Open the final MP4.
4. Open the Information Sheet.
5. Open every still.
6. Confirm all filenames.
7. Confirm that the final MP4 is the corrected version.
8. Confirm that the runtime does not exceed 1 minute, 10 seconds.
9. Confirm that the package can be downloaded and opened from another device.

## Submission

| Item | Required filename |
|---|---|
| Final Cut Package | `Lastname_Firstname_FinalPackage.zip` |
| Project organization | Reviewed in person |

Submit the ZIP file through Avenue to Learn.

The final project must be correctly submitted and technically usable to be included in the public screening.

Incorrect filenames, missing deliverables, inaccessible files, broken media, or an incomplete package may prevent the work from being screened and may affect the grade.

</div>
</details>

---

Credits: Jessica A. Rodríguez
