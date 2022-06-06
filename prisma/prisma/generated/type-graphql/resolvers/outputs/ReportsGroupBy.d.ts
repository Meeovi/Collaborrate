import { Prisma } from "@prisma/client";
import { ReportsAvgAggregate } from "../outputs/ReportsAvgAggregate";
import { ReportsCountAggregate } from "../outputs/ReportsCountAggregate";
import { ReportsMaxAggregate } from "../outputs/ReportsMaxAggregate";
import { ReportsMinAggregate } from "../outputs/ReportsMinAggregate";
import { ReportsSumAggregate } from "../outputs/ReportsSumAggregate";
export declare class ReportsGroupBy {
    id: number;
    customer: string | null;
    email: string | null;
    products: string | null;
    quantity: Prisma.Decimal | null;
    subtotal: string | null;
    applied_coupon: string | null;
    created: Date | null;
    updated: Date | null;
    ip_address: string | null;
    _count: ReportsCountAggregate | null;
    _avg: ReportsAvgAggregate | null;
    _sum: ReportsSumAggregate | null;
    _min: ReportsMinAggregate | null;
    _max: ReportsMaxAggregate | null;
}
