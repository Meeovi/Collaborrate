"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCitiesArgs_1 = require("./args/FindUniqueCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let FindUniqueCitiesResolver = class FindUniqueCitiesResolver {
    async findUniqueCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCitiesArgs_1.FindUniqueCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCitiesResolver.prototype, "findUniqueCities", null);
FindUniqueCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], FindUniqueCitiesResolver);
exports.FindUniqueCitiesResolver = FindUniqueCitiesResolver;
