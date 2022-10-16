"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOotoArgs_1 = require("./args/AggregateOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const AggregateOoto_1 = require("../../outputs/AggregateOoto");
const helpers_1 = require("../../../helpers");
let AggregateOotoResolver = class AggregateOotoResolver {
    async aggregateOoto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOoto_1.AggregateOoto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOotoArgs_1.AggregateOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOotoResolver.prototype, "aggregateOoto", null);
AggregateOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], AggregateOotoResolver);
exports.AggregateOotoResolver = AggregateOotoResolver;
