"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyContent_typeArgs_1 = require("./args/CreateManyContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyContent_typeResolver = class CreateManyContent_typeResolver {
    async createManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyContent_typeArgs_1.CreateManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyContent_typeResolver.prototype, "createManyContent_type", null);
CreateManyContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], CreateManyContent_typeResolver);
exports.CreateManyContent_typeResolver = CreateManyContent_typeResolver;
