"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTemplatesArgs_1 = require("./args/FindManyTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const helpers_1 = require("../../../helpers");
let FindManyTemplatesResolver = class FindManyTemplatesResolver {
    async findManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Templates_1.Templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTemplatesArgs_1.FindManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTemplatesResolver.prototype, "findManyTemplates", null);
FindManyTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], FindManyTemplatesResolver);
exports.FindManyTemplatesResolver = FindManyTemplatesResolver;
