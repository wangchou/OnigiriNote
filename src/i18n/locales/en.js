import {
  YEAR_BOOK_ID,
  MONTH_BOOK_ID,
  WEEK_BOOK_ID,
  DAY_BOOK_ID,
  DONE_BUTTON,
  YEAR_KEY,
  MONTH_KEY,
  WEEK_KEY,
  DAY_KEY,
  EMPTY_STATE_KEY,
  FONT_SIZE,
  RESET_ALL,
  SETTING_PAGE,
} from 'src/constants'
import Keys from '../keys'
import emptyState from './emptyState'

export default {
  [Keys[YEAR_BOOK_ID].titleFormat]: 'YYYY',
  [Keys[MONTH_BOOK_ID].titleFormat]: 'MMM YYYY',
  [Keys[WEEK_BOOK_ID].titleFormat]: 'MMM Do ～ ([week] W)',
  [Keys[DAY_BOOK_ID].titleFormat]: 'MMM Do (ddd)',
  [Keys[YEAR_BOOK_ID].statusTitleFormat]: 'YYYY',
  [Keys[MONTH_BOOK_ID].statusTitleFormat]: 'MMM',
  [Keys[WEEK_BOOK_ID].statusTitleFormat]: 'MMM Do ～',
  [DONE_BUTTON]: 'Done',
  [YEAR_KEY]: 'Year',
  [MONTH_KEY]: 'Month',
  [WEEK_KEY]: 'Week',
  [DAY_KEY]: 'Day',
  [Keys[YEAR_BOOK_ID].thisTitleFormat]: 'This Year',
  [Keys[MONTH_BOOK_ID].thisTitleFormat]: 'THis Month',
  [Keys[WEEK_BOOK_ID].thisTitleFormat]: 'This Week',
  [Keys[DAY_BOOK_ID].thisTitleFormat]: 'Today',
  [EMPTY_STATE_KEY]:emptyState.en,
  [FONT_SIZE]: 'Font Size:',
  [Keys[YEAR_BOOK_ID].numOfLines]: 'Number of Lines in Year Page:',
  [Keys[MONTH_BOOK_ID].numOfLines]: 'Number of Lines in Month Page:',
  [Keys[WEEK_BOOK_ID].numOfLines]: 'Number of Lines in Week Page:',
  [Keys[DAY_BOOK_ID].numOfLines]: 'Number of Lines in Day Page:',
  [RESET_ALL]: 'Reset All',
  [SETTING_PAGE]: 'Setting Page',
}
