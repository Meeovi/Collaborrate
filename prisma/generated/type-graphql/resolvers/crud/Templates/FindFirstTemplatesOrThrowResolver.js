"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTemplatesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTemplatesOrThrowArgs_1 = require("./args/FindFirstTemplatesOrThrowArgs");
const Templates_1 = require("../../../models/Templates");
const helpers_1 = require("../../../helpers");
let FindFirstTemplatesOrThrowResolver = class FindFirstTemplatesOrThrowResolver {
    async findFirstTemplatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTemplatesOrThrowArgs_1.FindFirstTemplatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTemplatesOrThrowResolver.prototype, "findFirstTemplatesOrThrow", null);
FindFirstTemplatesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], FindFirstTemplatesOrThrowResolver);
exports.FindFirstTemplatesOrThrowResolver = FindFirstTemplatesOrThrowResolver;
