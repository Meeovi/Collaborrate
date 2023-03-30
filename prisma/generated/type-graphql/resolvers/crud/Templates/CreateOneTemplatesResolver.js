"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTemplatesArgs_1 = require("./args/CreateOneTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const helpers_1 = require("../../../helpers");
let CreateOneTemplatesResolver = class CreateOneTemplatesResolver {
    async createOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTemplatesArgs_1.CreateOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTemplatesResolver.prototype, "createOneTemplates", null);
CreateOneTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], CreateOneTemplatesResolver);
exports.CreateOneTemplatesResolver = CreateOneTemplatesResolver;
