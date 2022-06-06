"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUrl_rewritesArgs_1 = require("./args/AggregateUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const AggregateUrl_rewrites_1 = require("../../outputs/AggregateUrl_rewrites");
const helpers_1 = require("../../../helpers");
let AggregateUrl_rewritesResolver = class AggregateUrl_rewritesResolver {
    async aggregateUrl_rewrites(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUrl_rewrites_1.AggregateUrl_rewrites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUrl_rewritesArgs_1.AggregateUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUrl_rewritesResolver.prototype, "aggregateUrl_rewrites", null);
AggregateUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], AggregateUrl_rewritesResolver);
exports.AggregateUrl_rewritesResolver = AggregateUrl_rewritesResolver;
