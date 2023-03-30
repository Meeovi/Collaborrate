"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReturnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReturnsArgs_1 = require("./args/AggregateReturnsArgs");
const Returns_1 = require("../../../models/Returns");
const AggregateReturns_1 = require("../../outputs/AggregateReturns");
const helpers_1 = require("../../../helpers");
let AggregateReturnsResolver = class AggregateReturnsResolver {
    async aggregateReturns(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReturns_1.AggregateReturns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReturnsArgs_1.AggregateReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReturnsResolver.prototype, "aggregateReturns", null);
AggregateReturnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], AggregateReturnsResolver);
exports.AggregateReturnsResolver = AggregateReturnsResolver;
