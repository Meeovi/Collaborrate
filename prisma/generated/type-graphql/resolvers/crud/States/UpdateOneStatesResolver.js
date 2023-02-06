"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneStatesArgs_1 = require("./args/UpdateOneStatesArgs");
const States_1 = require("../../../models/States");
const helpers_1 = require("../../../helpers");
let UpdateOneStatesResolver = class UpdateOneStatesResolver {
    async updateOneStates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).states.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => States_1.States, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStatesArgs_1.UpdateOneStatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneStatesResolver.prototype, "updateOneStates", null);
UpdateOneStatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => States_1.States)
], UpdateOneStatesResolver);
exports.UpdateOneStatesResolver = UpdateOneStatesResolver;
