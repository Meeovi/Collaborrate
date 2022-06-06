"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSourceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSourceArgs_1 = require("./args/AggregateSourceArgs");
const Source_1 = require("../../../models/Source");
const AggregateSource_1 = require("../../outputs/AggregateSource");
const helpers_1 = require("../../../helpers");
let AggregateSourceResolver = class AggregateSourceResolver {
    async aggregateSource(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).source.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSource_1.AggregateSource, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSourceArgs_1.AggregateSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSourceResolver.prototype, "aggregateSource", null);
AggregateSourceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], AggregateSourceResolver);
exports.AggregateSourceResolver = AggregateSourceResolver;
