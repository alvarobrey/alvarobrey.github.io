import moment from 'moment'
import {
  CVItemType,
  CVTimelineItem,
  CVTimelineItemWithStartDate
} from '~/model/CVModel'

const dateFormat = 'YYYY/MM'
function parseDate(date: string): moment.Moment {
  return moment(date, dateFormat)
}

export const educationCVItems: CVTimelineItemWithStartDate[] = [
  new CVTimelineItemWithStartDate(
    'ITDegree',
    'usc',
    parseDate('2016/09'),
    parseDate('2012/09'),
    CVItemType.EDUCATION
  ),
  new CVTimelineItemWithStartDate(
    'AIMasters',
    'uimp',
    parseDate('2019/07'),
    parseDate('2017/09'),
    CVItemType.EDUCATION
  )
]

export const workCVItems: CVTimelineItemWithStartDate[] = [
  new CVTimelineItemWithStartDate(
    'everis',
    'everis',
    parseDate('2015/06'),
    parseDate('2015/09'),
    CVItemType.WORK
  ),
  new CVTimelineItemWithStartDate(
    'citius',
    'citius',
    parseDate('2018/04'),
    parseDate('2016/10'),
    CVItemType.WORK
  ),
  new CVTimelineItemWithStartDate(
    'imagames',
    'imagames',
    undefined,
    parseDate('2018/12'),
    CVItemType.WORK
  )
]

export const courseCVItems: CVTimelineItem[] = [
  new CVTimelineItem(
    'machineLearning',
    'coursera',
    parseDate('2017/04'),
    CVItemType.COURSE
  ),
  new CVTimelineItem(
    'scalaFP',
    'coursera',
    parseDate('2019/06'),
    CVItemType.COURSE
  )
]

export const CVTimelineItems: CVTimelineItem[] = [
  ...educationCVItems,
  ...workCVItems,
  ...courseCVItems
]
