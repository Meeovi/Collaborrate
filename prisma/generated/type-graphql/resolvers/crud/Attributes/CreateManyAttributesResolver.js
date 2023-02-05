"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAttributesArgs_1 = require("./args/CreateManyAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAttributesResolver = class CreateManyAttributesResolver {
    async createManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAttributesArgs_1.CreateManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAttributesResolver.prototype, "createManyAttributes", null);
CreateManyAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], CreateManyAttributesResolver);
exports.CreateManyAttributesResolver = CreateManyAttributesResolver;
