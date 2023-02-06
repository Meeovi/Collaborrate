"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneApitokenArgs_1 = require("./args/UpdateOneApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let UpdateOneApitokenResolver = class UpdateOneApitokenResolver {
    async updateOneApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneApitokenArgs_1.UpdateOneApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneApitokenResolver.prototype, "updateOneApitoken", null);
UpdateOneApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], UpdateOneApitokenResolver);
exports.UpdateOneApitokenResolver = UpdateOneApitokenResolver;
