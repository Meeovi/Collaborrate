"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyPagesArgs_1 = require("./args/CreateManyPagesArgs");
const Pages_1 = require("../../../models/Pages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPagesResolver = class CreateManyPagesResolver {
    async createManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPagesArgs_1.CreateManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPagesResolver.prototype, "createManyPages", null);
CreateManyPagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], CreateManyPagesResolver);
exports.CreateManyPagesResolver = CreateManyPagesResolver;
