---
title: Recursively List All Files/Folders with Excel VBA
subTitle: A wander through the pages of Diffords
category: "code"
cover: poster.jpg
---

I've encountered this often enough that it's worth posting up here &#8211; I frequently need to list files in an Excel sheet and put notes by the side of them. Right now it's the suitability of each to be processed by a tool, previously it's just been wanting a list of all my MP3s - possibly to rename them later.

I end up trawling various sites and having to re-write what's there but this is a fairly standard way of doing it and I've added the recursion to make it work for me (also added full path and extension to the columns).

```vb
Option Explicit
Sub ListFiles()
    Dim f As Object, fso As Object, flder As Object
    Dim folder As String
    Dim wb As Workbook, ws As Worksheet
    Set wb = ActiveWorkbook
    Set ws = ActiveSheet
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    With Application.FileDialog(msoFileDialogFolderPicker)
        .Show
        If .SelectedItems.Count = 0 Then
            MsgBox "Cancel Selected"
            End
        End If
        folder = .SelectedItems(1)
    End With
    
    ListIndividualFiles ws, fso, folder
    
    Columns("A:A").Columns.AutoFit
End Sub
Private Sub ListIndividualFiles(ws, fso, folder)
Dim extn, f, fo

    For Each f In fso.GetFolder(folder).Files
        ws.Range("A" & ws.Rows.Count).End(xlUp).Offset(1, 0) = folder
        ws.Range("B" & ws.Rows.Count).End(xlUp).Offset(1, 0) = f.Name
        extn = Split(f.Name, ".")
        If (UBound(extn) > 0) Then extn = extn(UBound(extn))
        ws.Range("C" & ws.Rows.Count).End(xlUp).Offset(1, 0) = extn
    Next 'f
    
    For Each fo In fso.GetFolder(folder).subFolders
        ListIndividualFiles ws, fso, folder & "\" & fo.Name
    Next 'fo
End Sub
```
