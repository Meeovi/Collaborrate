"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneFullfillmentsArgs_1 = require("./args/DeleteOneFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const helpers_1 = require("../../../helpers");
let DeleteOneFullfillmentsResolver = class DeleteOneFullfillmentsResolver {
    async deleteOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFullfillmentsArgs_1.DeleteOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneFullfillmentsResolver.prototype, "deleteOneFullfillments", null);
DeleteOneFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], DeleteOneFullfillmentsResolver);
exports.DeleteOneFullfillmentsResolver = DeleteOneFullfillmentsResolver;
