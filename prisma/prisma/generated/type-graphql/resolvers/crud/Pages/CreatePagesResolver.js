"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreatePagesArgs_1 = require("./args/CreatePagesArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let CreatePagesResolver = class CreatePagesResolver {
    async createPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pages_1.Pages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePagesArgs_1.CreatePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreatePagesResolver.prototype, "createPages", null);
CreatePagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], CreatePagesResolver);
exports.CreatePagesResolver = CreatePagesResolver;
