"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTemplatesArgs_1 = require("./args/CreateManyTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTemplatesResolver = class CreateManyTemplatesResolver {
    async createManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTemplatesArgs_1.CreateManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTemplatesResolver.prototype, "createManyTemplates", null);
CreateManyTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], CreateManyTemplatesResolver);
exports.CreateManyTemplatesResolver = CreateManyTemplatesResolver;
