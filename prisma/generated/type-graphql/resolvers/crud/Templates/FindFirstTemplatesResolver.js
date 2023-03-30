"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTemplatesArgs_1 = require("./args/FindFirstTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const helpers_1 = require("../../../helpers");
let FindFirstTemplatesResolver = class FindFirstTemplatesResolver {
    async findFirstTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTemplatesArgs_1.FindFirstTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTemplatesResolver.prototype, "findFirstTemplates", null);
FindFirstTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], FindFirstTemplatesResolver);
exports.FindFirstTemplatesResolver = FindFirstTemplatesResolver;
