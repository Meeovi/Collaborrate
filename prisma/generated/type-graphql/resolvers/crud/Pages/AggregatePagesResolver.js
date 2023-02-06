"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePagesArgs_1 = require("./args/AggregatePagesArgs");
const Pages_1 = require("../../../models/Pages");
const AggregatePages_1 = require("../../outputs/AggregatePages");
const helpers_1 = require("../../../helpers");
let AggregatePagesResolver = class AggregatePagesResolver {
    async aggregatePages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePages_1.AggregatePages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePagesArgs_1.AggregatePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePagesResolver.prototype, "aggregatePages", null);
AggregatePagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], AggregatePagesResolver);
exports.AggregatePagesResolver = AggregatePagesResolver;
