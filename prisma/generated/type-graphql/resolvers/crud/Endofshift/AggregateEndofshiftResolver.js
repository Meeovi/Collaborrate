"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEndofshiftArgs_1 = require("./args/AggregateEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const AggregateEndofshift_1 = require("../../outputs/AggregateEndofshift");
const helpers_1 = require("../../../helpers");
let AggregateEndofshiftResolver = class AggregateEndofshiftResolver {
    async aggregateEndofshift(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEndofshift_1.AggregateEndofshift, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEndofshiftArgs_1.AggregateEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEndofshiftResolver.prototype, "aggregateEndofshift", null);
AggregateEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], AggregateEndofshiftResolver);
exports.AggregateEndofshiftResolver = AggregateEndofshiftResolver;
