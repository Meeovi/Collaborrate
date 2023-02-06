"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyInternalizationArgs_1 = require("./args/CreateManyInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyInternalizationResolver = class CreateManyInternalizationResolver {
    async createManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInternalizationArgs_1.CreateManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyInternalizationResolver.prototype, "createManyInternalization", null);
CreateManyInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], CreateManyInternalizationResolver);
exports.CreateManyInternalizationResolver = CreateManyInternalizationResolver;
