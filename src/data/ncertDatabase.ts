import { ClassLevel } from '../types';

export interface NcertChapter {
  id: string;
  name: string;
  book: string;
  type: 'Prose' | 'Poetry' | 'Supplementary';
  author: string;
}

export const NCERT_DATABASE: Record<ClassLevel, NcertChapter[]> = {
  '10': [
    // Book 1: First Flight (Prose)
    { id: '10-ff-1', name: 'A Letter to God', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'G.L. Fuentes' },
    { id: '10-ff-2', name: 'Nelson Mandela: Long Walk to Freedom', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Nelson Rolihlahla Mandela' },
    { id: '10-ff-3a', name: 'His First Flight (Two Stories About Flying)', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Liam O’Flaherty' },
    { id: '10-ff-3b', name: 'Black Aeroplane (Two Stories About Flying)', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Frederick Forsyth' },
    { id: '10-ff-4', name: 'From the Diary of Anne Frank', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Anne Frank' },
    { id: '10-ff-5a', name: 'A Baker from Goa (Glimpses of India)', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Lucio Rodrigues' },
    { id: '10-ff-5b', name: 'Coorg (Glimpses of India)', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Lokesh Abrol' },
    { id: '10-ff-5c', name: 'Tea from Assam (Glimpses of India)', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Arup Kumar Datta' },
    { id: '10-ff-6', name: 'Mijbil the Otter', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Gavin Maxwell' },
    { id: '10-ff-7', name: 'Madam Rides the Bus', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Vallikkannan' },
    { id: '10-ff-8', name: 'The Sermon at Benares', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Betty Renshaw' },
    { id: '10-ff-9', name: 'The Proposal', book: 'Book 1: First Flight (Prose)', type: 'Prose', author: 'Anton Chekhov' },

    // Book 1: First Flight (Poetry)
    { id: '10-p-1', name: 'Dust of Snow', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Robert Frost' },
    { id: '10-p-2', name: 'Fire and Ice', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Robert Frost' },
    { id: '10-p-3', name: 'A Tiger in the Zoo', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Leslie Norris' },
    { id: '10-p-4', name: 'How to Tell Wild Animals', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Carolyn Wells' },
    { id: '10-p-5', name: 'The Ball Poem', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'John Berryman' },
    { id: '10-p-6', name: 'Amanda!', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Robin Klein' },
    { id: '10-p-7', name: 'Trees', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Adrienne Rich' },
    { id: '10-p-8', name: 'Fog', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Carl Sandburg' },
    { id: '10-p-9', name: 'The Tale of Custard the Dragon', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'Ogden Nash' },
    { id: '10-p-10', name: 'For Anne Gregory', book: 'Book 1: First Flight (Poetry)', type: 'Poetry', author: 'William Butler Yeats' },

    // Book 2: Footprints Without Feet (Supplementary Reader)
    { id: '10-fp-1', name: 'A Triumph of Surgery', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'James Herriot' },
    { id: '10-fp-2', name: 'The Thief’s Story', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Ruskin Bond' },
    { id: '10-fp-3', name: 'The Midnight Visitor', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Robert Arthur' },
    { id: '10-fp-4', name: 'A Question of Trust', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Victor Canning' },
    { id: '10-fp-5', name: 'Footprints Without Feet', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'H.G. Wells' },
    { id: '10-fp-6', name: 'The Making of a Scientist', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Robert W. Peterson' },
    { id: '10-fp-7', name: 'The Necklace', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Guy de Maupassant' },
    { id: '10-fp-8', name: 'Bholi', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'K.A. Abbas' },
    { id: '10-fp-9', name: 'The Book That Saved the Earth', book: 'Book 2: Footprints Without Feet (Supplementary Reader)', type: 'Supplementary', author: 'Claire Boiko' }
  ],

  '11': [
    // Book 1: Hornbill (Prose)
    { id: '11-hb-1', name: 'The Portrait of a Lady', book: 'Book 1: Hornbill (Prose)', type: 'Prose', author: 'Khushwant Singh' },
    { id: '11-hb-2', name: "We're Not Afraid to Die... if We Can All Be Together", book: 'Book 1: Hornbill (Prose)', type: 'Prose', author: 'Gordon Cook and Alan East' },
    { id: '11-hb-3', name: 'Discovering Tut: the Saga Continues', book: 'Book 1: Hornbill (Prose)', type: 'Prose', author: 'A.R. Williams' },
    { id: '11-hb-4', name: 'The Adventure', book: 'Book 1: Hornbill (Prose)', type: 'Prose', author: 'Jayant Narlikar' },
    { id: '11-hb-5', name: 'Silk Road', book: 'Book 1: Hornbill (Prose)', type: 'Prose', author: 'Nick Middleton' },

    // Book 1: Hornbill (Poetry)
    { id: '11-hp-1', name: 'A Photograph', book: 'Book 1: Hornbill (Poetry)', type: 'Poetry', author: 'Shirley Toulson' },
    { id: '11-hp-2', name: 'The Laburnum Top', book: 'Book 1: Hornbill (Poetry)', type: 'Poetry', author: 'Ted Hughes' },
    { id: '11-hp-3', name: 'The Voice of the Rain', book: 'Book 1: Hornbill (Poetry)', type: 'Poetry', author: 'Walt Whitman' },
    { id: '11-hp-4', name: 'Childhood', book: 'Book 1: Hornbill (Poetry)', type: 'Poetry', author: 'Markus Natten' },
    { id: '11-hp-5', name: 'Father to Son', book: 'Book 1: Hornbill (Poetry)', type: 'Poetry', author: 'Elizabeth Jennings' },

    // Book 2: Snapshots (Supplementary Reader)
    { id: '11-sn-1', name: 'The Summer of the Beautiful White Horse', book: 'Book 2: Snapshots (Supplementary Reader)', type: 'Supplementary', author: 'William Saroyan' },
    { id: '11-sn-2', name: 'The Address', book: 'Book 2: Snapshots (Supplementary Reader)', type: 'Supplementary', author: 'Marga Minco' },
    { id: '11-sn-3', name: "Mother's Day", book: 'Book 2: Snapshots (Supplementary Reader)', type: 'Supplementary', author: 'J.B. Priestley' },
    { id: '11-sn-4', name: 'Birth', book: 'Book 2: Snapshots (Supplementary Reader)', type: 'Supplementary', author: 'A.J. Cronin' },
    { id: '11-sn-5', name: 'The Tale of Melon City', book: 'Book 2: Snapshots (Supplementary Reader)', type: 'Supplementary', author: 'Vikram Seth' }
  ],

  '12': [
    // Book 1: Flamingo (Prose)
    { id: '12-fl-1', name: 'The Last Lesson', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Alphonse Daudet' },
    { id: '12-fl-2', name: 'Lost Spring', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Anees Jung' },
    { id: '12-fl-3', name: 'Deep Water', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'William Douglas' },
    { id: '12-fl-4', name: 'The Rattrap', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Selma Lagerlöf' },
    { id: '12-fl-5', name: 'Indigo', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Louis Fischer' },
    { id: '12-fl-6', name: 'Poets and Pancakes', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Asokamitran' },
    { id: '12-fl-7', name: 'The Interview', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'Christopher Silvester' },
    { id: '12-fl-8', name: 'Going Places', book: 'Book 1: Flamingo (Prose)', type: 'Prose', author: 'A.R. Barton' },

    // Book 1: Flamingo (Poetry)
    { id: '12-fp-1', name: 'My Mother at Sixty-Six', book: 'Book 1: Flamingo (Poetry)', type: 'Poetry', author: 'Kamala Das' },
    { id: '12-fp-2', name: 'Keeping Quiet', book: 'Book 1: Flamingo (Poetry)', type: 'Poetry', author: 'Pablo Neruda' },
    { id: '12-fp-3', name: 'A Thing of Beauty', book: 'Book 1: Flamingo (Poetry)', type: 'Poetry', author: 'John Keats' },
    { id: '12-fp-4', name: 'A Roadside Stand', book: 'Book 1: Flamingo (Poetry)', type: 'Poetry', author: 'Robert Frost' },
    { id: '12-fp-5', name: 'Aunt Jennifer’s Tigers', book: 'Book 1: Flamingo (Poetry)', type: 'Poetry', author: 'Adrienne Rich' },

    // Book 2: Vistas (Supplementary Reader)
    { id: '12-vs-1', name: 'The Third Level', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Jack Finney' },
    { id: '12-vs-2', name: 'The Tiger King', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Kalki' },
    { id: '12-vs-3', name: 'Journey to the End of the Earth', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Tishani Doshi' },
    { id: '12-vs-4', name: 'The Enemy', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Pearl S. Buck' },
    { id: '12-vs-5', name: 'On the Face of It', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Susan Hill' },
    { id: '12-vs-6a', name: 'The Cutting of My Long Hair (Memories of Childhood)', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Zitkala-Sa' },
    { id: '12-vs-6b', name: 'We Too Are Human Beings (Memories of Childhood)', book: 'Book 2: Vistas (Supplementary Reader)', type: 'Supplementary', author: 'Bama' }
  ]
};
