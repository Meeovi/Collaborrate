"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCitiesArgs_1 = require("./args/DeleteOneCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let DeleteOneCitiesResolver = class DeleteOneCitiesResolver {
    async deleteOneCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCitiesArgs_1.DeleteOneCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCitiesResolver.prototype, "deleteOneCities", null);
DeleteOneCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], DeleteOneCitiesResolver);
exports.DeleteOneCitiesResolver = DeleteOneCitiesResolver;
