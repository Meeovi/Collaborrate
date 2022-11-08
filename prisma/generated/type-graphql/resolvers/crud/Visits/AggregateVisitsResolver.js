"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisitsArgs_1 = require("./args/AggregateVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const AggregateVisits_1 = require("../../outputs/AggregateVisits");
const helpers_1 = require("../../../helpers");
let AggregateVisitsResolver = class AggregateVisitsResolver {
    async aggregateVisits(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVisits_1.AggregateVisits, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisitsArgs_1.AggregateVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVisitsResolver.prototype, "aggregateVisits", null);
AggregateVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], AggregateVisitsResolver);
exports.AggregateVisitsResolver = AggregateVisitsResolver;
