@extends('layouts.main')

@section('content')

<h2>
    GM Phase Sheet
</h2>

<div class="adventure-phase">
    <h3>
        Adventure Phase
    </h3>
    <p>
        Phase Progress
    </p>
    <progress class="progress is-primary" value="1" max="4"></progress>

    <h4>Turn Counter</h4>
    <p class="control is-grouped">
        <button class="button is-large">-</button>
        <span class="button is-large">1</span>
        <button class="button is-large">+</button>
    </p>
</div>

<h3>
    Ambient Light
</h3>

<div class="light-sources">
    
</div>
@endsection