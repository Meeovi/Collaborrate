"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyVendorsArgs_1 = require("./args/CreateManyVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyVendorsResolver = class CreateManyVendorsResolver {
    async createManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVendorsArgs_1.CreateManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyVendorsResolver.prototype, "createManyVendors", null);
CreateManyVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], CreateManyVendorsResolver);
exports.CreateManyVendorsResolver = CreateManyVendorsResolver;
