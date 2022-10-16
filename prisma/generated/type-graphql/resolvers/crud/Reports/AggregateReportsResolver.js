"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReportsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReportsArgs_1 = require("./args/AggregateReportsArgs");
const Reports_1 = require("../../../models/Reports");
const AggregateReports_1 = require("../../outputs/AggregateReports");
const helpers_1 = require("../../../helpers");
let AggregateReportsResolver = class AggregateReportsResolver {
    async aggregateReports(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reports.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReports_1.AggregateReports, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReportsArgs_1.AggregateReportsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReportsResolver.prototype, "aggregateReports", null);
AggregateReportsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reports_1.Reports)
], AggregateReportsResolver);
exports.AggregateReportsResolver = AggregateReportsResolver;
