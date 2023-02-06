"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCitiesArgs_1 = require("./args/FindManyCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let FindManyCitiesResolver = class FindManyCitiesResolver {
    async findManyCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cities_1.Cities], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCitiesArgs_1.FindManyCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCitiesResolver.prototype, "findManyCities", null);
FindManyCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], FindManyCitiesResolver);
exports.FindManyCitiesResolver = FindManyCitiesResolver;
