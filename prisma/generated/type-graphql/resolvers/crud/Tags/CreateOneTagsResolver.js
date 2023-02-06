"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTagsArgs_1 = require("./args/CreateOneTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let CreateOneTagsResolver = class CreateOneTagsResolver {
    async createOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTagsArgs_1.CreateOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTagsResolver.prototype, "createOneTags", null);
CreateOneTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], CreateOneTagsResolver);
exports.CreateOneTagsResolver = CreateOneTagsResolver;
